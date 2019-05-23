import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "react-bootstrap/Card";

//Imports propios
import loginCardImg from "../../assets/loginCardImg.jpg";
import LoginView from "./LoginView";
import RegisterView from "../Register/RegisterView";

//Estilos de Login
import { CardWrapper, CardRow, CardCol, CardImgL, Button } from "./LoginStyles";

export default class Login extends Component {
  state = {
    activelogin: true,
    activeregister: false
  };

  handleLoginChange = () => {
    this.setState(prevState => ({
      activelogin: !prevState.activelogin
    }));
  };
  handleRegisterChange=()=>{
    this.setState(prevState => ({
      activeregister: !prevState.activeregister
    }));
  }
  renderActiveForm = () => {
    if (this.state.activelogin === true) {
      return <LoginView onFormChange={this.handleFormChange} />;
    } else {
      return <RegisterView onFormChange={this.handleFormChange} />;
    }
  };
  render() {
    return (
      <div className="container">
        <CardWrapper className="d-flex align-items-center">
          <Card>
            <CardRow className="row no-gutters">
              <CardCol className="col-md-6">
                <CardImgL src={loginCardImg} className="card-img" alt="..." />
              </CardCol>

              <CardCol className="col-md-6">
                <CSSTransition
                  timeout={200}
                  in={this.state.activelogin}
                  classNames="login"
                  onExited={()=>this.handleRegisterChange()}
                  unmountOnExit
                  appear
                >
                  <Fragment>
                    <LoginView onLoginChange={this.handleLoginChange} />
                  </Fragment>
                </CSSTransition>

                <CSSTransition
                  timeout={200}
                  in={this.state.activeregister}
                  classNames="login"
                  onExited={()=>this.handleLoginChange()}
                  unmountOnExit
                  appear
                >
                  <Fragment>
                    <RegisterView onRegisterChange={this.handleRegisterChange} />
                  </Fragment>
                </CSSTransition>
              </CardCol>
            </CardRow>
          </Card>
        </CardWrapper>
      </div>
    );
  }
}
