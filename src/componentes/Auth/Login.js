import React, { Component, Fragment, Suspense } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "react-bootstrap/Card";

//Imports propios
import loginCardImg2 from "../../assets/loginCardImg2.jpg";
import loginCardImg2Small from "../../assets/loginCardImg2_opt.jpg";
import LoginView from "./LoginView";
import RegisterView from "../Register/RegisterView";
import ForgotView from "../Forgot/ForgotView";
// import CardImg from "./CardImg";
import ImageWrapper from "./ImageWrapper";
//Estilos de Login
import { CardWrapper, CardRow, CardCol, CardImgL } from "./LoginStyles";
const images={
  large:loginCardImg2,
  small:loginCardImg2Small
}
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
              <CardCol className="col-md-6 col-sm-6 col  ">
                {/*<CardImgL src={loginCardImg2} className="card-img" alt="..." />*/}
               {/* <CardImg image={loginCardImg2} /> */}
               <ImageWrapper image={images} nr={10} render={true} />
              </CardCol>

              <CardCol className="col-md-6 col-sm-6 col">
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
                      refetch={this.props.refetch}
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
