import React, { Component, Fragment } from "react";
import {CSSTransition} from 'react-transition-group';
import Header from "../Layout/Header";
import Aside from "../Home/Aside";
import Content from '../Home/Content/Content';
import {HomeContainer} from '../Layout/HeaderStyles';
export default class Admin extends Component {
  state = {
    openAside: true
  };
  handleOpenAside = () => {
    this.setState(prevState => ({
      openAside: !prevState.openAside
    }));
  };
  render() {
    const routes=this.props.routes;
    return (
      <Fragment>
        <Header handleOpenAside={this.handleOpenAside} />
        <HomeContainer className="container-fluid">
          <div className="row">
            <CSSTransition
              timeout={500}
              in={this.state.openAside}
              classNames="menu"
              unmountOnExit
              appear
            >
              <Fragment>
                <Aside routes={routes} />
              </Fragment>
            </CSSTransition>
            <Content asideGone={this.state.openAside} routes={routes} />
          </div>
        </HomeContainer>
      </Fragment>
    );
  }
}
