import React, { Component } from 'react';
import {
  PassForgotWrapper,
  PassForgot,
  Button,
  InputIconM,
  InputIconL,
  IconWrapper
 } from "../Auth/LoginStyles";
import{LogoWrapper} from './RegisterStyles'
export default class Register extends Component {
  handleClick=()=>{
    this.props.onRegisterChange("register","login");
  }
  render() {
    return (
     <div className="card-body d-flex align-items-center flex-column  ">
                  <LogoWrapper className="d-flex justify-content-center align-items-start">
                  <h2>Bienvenido!</h2>
                  </LogoWrapper>
                  <form className="d-flex flex-column mt-3 form-group w-75 ">
                    <span>Ingresa tu usuario:</span>
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconM /></IconWrapper>
                    </div>
                    <input type="text" className="form-control " placeholder="Email"/>
                    </div>
                    <span>Ingresa tu contraseña:</span>
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconL /></IconWrapper>
                    </div>
                    <input type="password" className="form-control " placeholder="Contraseña"/>
                    </div>
                    <span>Ingresa tu Email:</span>
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconL /></IconWrapper>
                    </div>
                    <input type="email" className="form-control " placeholder="Email"/>
                    </div>
                 

                    <Button to="/home" className="btn btn-primary mb-2">Registrate</Button>
                    <Button onClick={this.handleClick} className="btn btn-primary">¿Tienes una cuenta? ¡Vuelve al login aquí!</Button>
                  </form>
                </div>
    )
  }
}
