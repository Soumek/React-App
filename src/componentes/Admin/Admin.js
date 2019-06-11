import React, { Component, Fragment } from "react";
import {CSSTransition} from 'react-transition-group';
import Header from '../Layout/Header/Header';
import Aside from "../Home/Aside";
import Content from '../Home/Content/Content';
import {HomeContainer} from './AdminStyles';
import adminroutesjson from '../../routes/adminroutesjson';
const {adminsubroutes}=JSON.parse(adminroutesjson);
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
                <Aside routes={adminsubroutes} />
              </Fragment>
            </CSSTransition>
            <Content asideGone={this.state.openAside} routes={adminsubroutes} />
          </div>
        </HomeContainer>
      </Fragment>
    );
  }
}
