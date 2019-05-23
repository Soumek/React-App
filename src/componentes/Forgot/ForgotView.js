import React, { Component } from 'react'

import {
  PassForgotWrapper,
  PassForgot,
  Button,
  InputIconM,
  InputIconL,
  IconWrapper
 } from "../Auth/LoginStyles";
import{LogoWrapper} from '../Register/RegisterStyles'
export default class ForgotView extends Component {
  handleClick=()=>{
    this.props.onForgotChange("forgot","login");
  }
  render() {
    return (
     <div className="card-body d-flex align-items-center flex-column  ">
                  <LogoWrapper className="d-flex justify-content-center align-items-start">
                  <h2>Olvidaste tu contraseña</h2>
                  </LogoWrapper>
                  <form className="d-flex flex-column mt-3 form-group w-75 ">
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconM /></IconWrapper>
                    </div>
                    <input type="email" className="form-control " placeholder="Email"/>
                    </div>
                    <Button onClick={this.handleClick} className="btn btn-primary">Volver al login</Button>
                  </form>
                </div>
    )
  }
}
