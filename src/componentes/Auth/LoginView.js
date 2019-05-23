import React, { Component } from "react";

//Imports propios
import bike from "../../assets/img/2.jpg";
// Estilos de loginView
import {
  LogoWrapper,
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
      <div className="card-body d-flex align-items-center flex-column  ">
                  <LogoWrapper className="d-flex justify-content-center align-items-end">
                  <h2>Umbani</h2>
                  </LogoWrapper>
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
                 

                    <Button to="/home" className="btn btn-primary mb-2">Ingresar</Button>
                    <Button onClick={this.props.onLoginChange} className="btn btn-primary">¿No tienes una cuenta? ¡Regístrate aquí!</Button>
                  </form>
                </div>
    );
  }
}



 