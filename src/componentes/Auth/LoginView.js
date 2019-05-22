import React, { Component } from "react";
import loginCardImg from "../../assets/loginCardImg.jpg";
import bike from "../../assets/img/2.jpg";
import user from "../../assets/img/user.png";
import Card from "react-bootstrap/Card";

// Styles
import {
  CardWrapper,
  // Card,
  CardRow,
  CardImgL,CardImgRWrapper,
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
      <CardWrapper className="d-flex align-items-center">
          <Card>
            <CardRow className="row no-gutters">
        
              <CardRow className="col-md-6">
                <CardImgL src={loginCardImg} className="card-img" alt="..." />
              </CardRow>
          
              <CardRow className="col-md-6">
                <div className="card-body d-flex align-items-center flex-column  ">
                  <CardImgRWrapper className="d-flex justify-content-center img-wrapper">
                  <CardImgR src={bike} className="card-img mt-2" />
                  </CardImgRWrapper>
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
                    <Button to="/registrar" className="btn btn-primary">¿No tienes una cuenta? ¡Regístrate aquí!</Button>
                  </form>
                </div>
              </CardRow>
            </CardRow>
          </Card>
        </CardWrapper>
     
      </div>
    );
  }
}




 {/* <Card>
        <div className="row">
        <div className="col-md-6">
        <div className="imgWrapper">
          <Card.Img variant="top" src={loginCardImg} alt='' />
        </div>
        </div>
          <div className="col-md-6">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </div>
          </div>
        </Card> */}

 