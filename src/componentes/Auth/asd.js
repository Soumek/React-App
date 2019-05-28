import React, { Component, Fragment } from 'react';

import { withRouter } from 'react-router-dom';

import Error from '../Alertas/Error';

import { Mutation } from 'react-apollo';

const initialState = {
    usuario : '',
    password: ''
}

class Login extends Component {
    state = {
        ...initialState
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

    iniciarSesion = (e, usuarioAutenticar) => {
        e.preventDefault();
     
     }

     validarForm = () => {
        const {usuario, password} = this.state;

        const noValido = !usuario || !password;

        console.log(noValido);
        return noValido;
     }
    render() { 

        const {usuario, password} = this.state;
      
        return ( 
            <Fragment>
                 <h1 className="text-center mb-5">Iniciar Sesión</h1>
                <div className="row  justify-content-center">

                    <Mutation 
                        mutation={  }
                        variables={{usuario, password}}    
                    >
                    {( usuarioAutenticar, {loading, error, data}) => {

                        return (
                            
                            <form 
                                onSubmit={ e => this.iniciarSesion(e, usuarioAutenticar) } 
                                className="col-md-8"
                            >

                            {error && <Error error={error} />}
                            

                            <div className="form-group">
                                <label>Usuario</label>
                                <input 
                                    onChange={this.actualizarState} 
                                    value={usuario}
                                    type="text" 
                                    name="usuario" 
                                    className="form-control" 
                                    placeholder="Nombre Usuario" 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    onChange={this.actualizarState} 
                                    value={password}
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Password"
                                />
                            </div>

                            <button 
                                disabled={ 
                                    loading || this.validarForm()
                                }
                                type="submit" 
                                className="btn btn-success float-right">
                                    Iniciar Sesión
                            </button>
                            
                        </form>
                        )     
                    }}
                    </Mutation>
                </div>
            </Fragment>
        );
    }
}
 
export default withRouter(Login);


import React, { Component } from "react";
import { Mutation } from 'react-apollo';
import Error from '../Alertas/Error';
import {AUTENTICAR_USUARIO} from '../../mutations';
// Estilos de loginView
import {
  LogoWrapper,
  PassForgotWrapper,
  PassForgot,
  Button,
  InputIconM,
  InputIconL,
  IconWrapper
 } from "./LoginStyles";
 
 const initialState = {
  usuario : '',
  password: ''
}
export default class LoginView extends Component {
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

iniciarSesion = (e, usuarioAutenticar) => {
   e.preventDefault();

}

validarForm = () => {
   const {usuario, password} = this.state;

   const noValido = !usuario || !password;

   console.log(noValido);
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
                    <IconWrapper className="input-group-text" ><InputIconM /></IconWrapper>
                    </div>
                    <input type="email" name="usuario" onChange={this.actualizarState} className="form-control " placeholder="Usuario"/>
                    </div>
                    <div className="position-relative mb-2 input-group">
                    <div className="input-group-prepend">
                    <IconWrapper className="input-group-text" ><InputIconL /></IconWrapper>
                    </div>
                    <input type="password" name="password" onChange={this.actualizarState} className="form-control " placeholder="Contraseña"/>
                    </div>
                    <Button disabled={loading || this.validarForm()} className="btn btn-primary mb-2">Ingresar</Button>
                    <Button onClick={this.handleClick} className="btn btn-primary">¿No tienes una cuenta? ¡Regístrate aquí!</Button>
                  </form>
                    )
                  }}
                  
                  </Mutation>
                  
                </div>
    );
  }
}



 