import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "react-bootstrap/Card";

//Imports propios
import loginCardImg from "../../assets/loginCardImg.jpg";
import LoginView from "./LoginView";
import RegisterView from "../Register/RegisterView";
import ForgotView from "../Forgot/ForgotView";

//Estilos de Login
import { CardWrapper, CardRow, CardCol, CardImgL, Button } from "./LoginStyles";

export default class Login extends Component {
  state = {
    activelogin: true,
    activeregister: false,
    activeforgot: false,
    selectedform: ""
  };

  handleRenderChange = (option, next) => {
    this.setState(
      {
        selectedform: next
      },
      () => {
        if (option === "login") {
          this.setState(prevState => ({
            activelogin: !prevState.activelogin
          }));
        }

        if (option === "register") {
          this.setState(prevState => ({
            activeregister: !prevState.activeregister
          }));
        }
        if (option === "forgot") {
          this.setState(prevState => ({
            activeforgot: !prevState.activeforgot
          }));
        }
      }
    );
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
                  onExited={() =>
                    this.handleRenderChange(this.state.selectedform)
                  }
                  unmountOnExit
                  appear
                >
                  <Fragment>
                    <LoginView
                      id="login"
                      onLoginChange={this.handleRenderChange}
                    />
                  </Fragment>
                </CSSTransition>

                <CSSTransition
                  timeout={200}
                  in={this.state.activeregister}
                  classNames="login"
                  onExited={() =>
                    this.handleRenderChange(this.state.selectedform)
                  }
                  unmountOnExit
                  appear
                >
                  <Fragment>
                    <RegisterView
                      id="register"
                      onRegisterChange={this.handleRenderChange}
                    />
                  </Fragment>
                </CSSTransition>
                <CSSTransition
                  timeout={200}
                  in={this.state.activeforgot}
                  classNames="login"
                  onExited={() =>
                    this.handleRenderChange(this.state.selectedform)
                  }
                  unmountOnExit
                  appear
                >
                  <Fragment>
                    <ForgotView
                      id="forgot"
                      onForgotChange={this.handleRenderChange}
                    />
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