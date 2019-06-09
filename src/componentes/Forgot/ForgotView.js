import React, { Component } from 'react'
import {
  Button,
  InputIconM,
  IconWrapper
 } from "../Auth/LoginStyles";
import{LogoWrapper} from '../Register/RegisterStyles'
export default class ForgotView extends Component {
  handleClick=()=>{
    this.props.onForgotChange("forgot","login");
  }
  render() {
    return (
     <div className="card-body d-flex align-items-center justify-content-center flex-column  ">
                  <LogoWrapper className="d-flex justify-content-center align-items-start">
                  <h3 className="forgotTitle">Olvidaste tu contraseña</h3>
                  </LogoWrapper>
                  <form className="d-flex flex-column mt-3 form-group w-75 ">
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconM /></IconWrapper>
                    </div>
                    <input type="email" className="form-control " placeholder="Email"/>
                    </div>
                    <Button type="button" onClick={this.handleClick} className="btn btn-primary">Volver al login</Button>
                  </form>
                </div>
    )
  }
}
