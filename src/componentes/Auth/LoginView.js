import React, { Component } from "react";
import { Mutation } from 'react-apollo';
import Error from '../Alertas/Error';
import {withRouter} from 'react-router-dom';
import {AUTENTICAR_USUARIO} from '../../mutations';
// Estilos de loginView
import {
  LogoWrapper,
  PassForgotWrapper,
  PassForgot,
  Button,
  Icon,
  IconWrapper,
  AuthInputs
 } from "./LoginStyles";
 
 const initialState = {
  usuario : '',
  password: ''
}
 class LoginView extends Component {
  state = {
    ...initialState
}
  handleClick=()=>{
    this.props.onLoginChange("login","register");
  }
  handleForgot=()=>{
    this.props.onLoginChange("login","forgot")
  }
  actualizarState = e => {
    const { name, value} = e.target;

   this.setState({
       [name] : value
   })
}


limpiarState = () => {
    this.setState({...initialState});
}

iniciarSesion = async (e, usuarioAutenticar) => {
   e.preventDefault();
   usuarioAutenticar().then(async ({data})=>{
     localStorage.setItem('token',data.autenticarUsuario.token);
     //Ejecutar el query una vez haya iniciado sesion
     await this.props.refetch();
     this.limpiarState();
     this.props.history.push('/home');

 


   });

   
   
   
   

   
}

validarForm = () => {
   const {usuario, password} = this.state;

   const noValido = !usuario || !password;

   return noValido;
}

  render() {
    const {usuario, password} = this.state;

    return (
      <div className="card-body d-flex align-items-center flex-column  ">
                  <LogoWrapper className="d-flex justify-content-center align-items-end">
                  <h2>Umbani</h2>
                  </LogoWrapper>
                  <PassForgotWrapper className="position-relative mt-3 mb-3">
                    <PassForgot onClick={this.handleForgot}>¿Olvidó su contraseña?</PassForgot>
                  </PassForgotWrapper>
                  <Mutation
                  mutation={AUTENTICAR_USUARIO}
                  variables={{usuario,password}}
                  >
                  {(usuarioAutenticar,{loading,error,data})=>{
                    return(
                    <form
                     onSubmit={
                       e=>this.iniciarSesion(e,usuarioAutenticar)
                     }
                     className="d-flex flex-column mt-3 form-group w-75 ">
                      {error && <Error error={error} />}
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><Icon className="far fa-user" /></IconWrapper>
                    </div>
                    <AuthInputs type="text" name="usuario" onChange={this.actualizarState} value={usuario} className="form-control " placeholder="Usuario"/>
                    </div>
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><Icon className="fa fa-lock" /></IconWrapper>
                    </div>
                    <AuthInputs type="password" name="password" onChange={this.actualizarState} value={password} className="form-control " placeholder="Contraseña"/>
                    </div>
                    <Button type="submit" disabled={loading || this.validarForm()} className="btn btn-primary mb-2">Ingresar</Button>
                    <Button type="button" onClick={this.handleClick} className="btn btn-primary">¿No tienes una cuenta? ¡Regístrate aquí!</Button>
                  </form>
                    )
                  }}
                  
                  </Mutation>
                  
                </div>
    );
  }
}

export default withRouter(LoginView);


 