import React, { Component } from "react";
import loginCardImg from "../assets/loginCardImg.jpg";


// Styles
import {
  CardWrapper,
  Card,
  CardRow,
  CardImgL,
  CardImgR,
  PassForgotWrapper,
  PassForgot,
  Button,
  InputIconM,
  InputIconL,
  IconWrapper
} from "./LoginStyles";

export default class LoginView extends Component {
  render() {
    return (
      <div className="container">
        <CardWrapper>
          <Card className="card">
            <CardRow className="row no-gutters">
              <CardRow className="col-md-6">
                <CardImgL src={loginCardImg} className="card-img" alt="..." />
              </CardRow>
              <div className="col-md-6 ">
                <div className="card-body d-flex align-items-center flex-column  ">
                  <CardImgR src={loginCardImg} className="card-img mt-2" />
                  <PassForgotWrapper className="position-relative mt-3 mb-3">
                    <PassForgot>¿Olvidó su contraseña?</PassForgot>
                  </PassForgotWrapper>
                  <form className="d-flex flex-column mt-3 form-group w-75 ">
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconM /></IconWrapper>
                    </div>
                    <input type="email" className="form-control " placeholder="Email"/>
                    </div>
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconL /></IconWrapper>
                    </div>
                    <input type="password" className="form-control " placeholder="Contraseña"/>
                    </div>
                 

                    <Button to="/home" className="btn btn-primary">Ingresar</Button>
                  </form>
                </div>
              </div>
            </CardRow>
          </Card>
        </CardWrapper>
      </div>
    );
  }
}
