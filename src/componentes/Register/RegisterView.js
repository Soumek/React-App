import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { NUEVO_USUARIO } from "../../mutations";
import { LogoWrapper, BacktoLogin } from "./RegisterStyles";
import { Button } from "../Auth/LoginStyles";
import Error from '../Alertas/Error';
const initialState = {
  usuario: "",
  password: "",
  repetirpassword: "",
  email: ""
};
export default class Register extends Component {
  state = {
    ...initialState
  };
  actualizarState = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleClick = () => {
    this.props.onRegisterChange("register", "login");
  };
  validarForm = () => {
    const { usuario, password, repetirpassword, email } = this.state;
    const novalido =
      !usuario || !password || !email || password !== repetirpassword;
    return novalido;
  };
  limpiarState = () => {
    this.setState({
      ...initialState
    });
  };
  crearRegistro = (e, crearUsuario) => {
    e.preventDefault();
    crearUsuario().then(data => {
      this.limpiarState();
      this.props.onRegisterChange("register", "login");
    });
  };
  render() {
    const { usuario, password, email, repetirpassword } = this.state;
    const input = {
      usuario,
      password,
      email
    };
    return (
      <div className="card-body d-flex align-items-center justify-content-center flex-column  ">
        <LogoWrapper className="d-flex justify-content-center">
          <h3><span>Crea</span> una cuenta</h3>
        </LogoWrapper>
        <Mutation mutation={NUEVO_USUARIO} variables={{ input }}>
          {(crearUsuario, { loading, error, data }) => {
            return (
              <form
                className="d-flex flex-column mt-3 form-group w-75"
                onSubmit={e => this.crearRegistro(e, crearUsuario)}
              >
                {error&&<Error error={error}/>}
                <div className="position-relative mb-3 input-group">
                  <input
                    onChange={this.actualizarState}
                    type="text"
                    name="usuario"
                    className="form-control "
                    placeholder="Usuario"
                    value={usuario}
                  />
                </div>
                <div className="position-relative mb-3 input-group">
                  <input
                    onChange={this.actualizarState}
                    type="password"
                    name="password"
                    className="form-control "
                    placeholder="Contraseña"
                    value={password}
                  />
                </div>
                <div className="position-relative mb-3 input-group">
                  <input
                    onChange={this.actualizarState}
                    type="password"
                    name="repetirpassword"
                    className="form-control "
                    placeholder="Repite tu contraseña"
                    value={repetirpassword}
                  />
                </div>
                <div className="position-relative mb-3 input-group">
                  <input
                    onChange={this.actualizarState}
                    type="email"
                    name="email"
                    className="form-control "
                    placeholder="Email"
                    value={email}
                  />
                </div>

                <Button
                  as="button"
                  type="submit"
                  disabled={loading || this.validarForm()}
                  className="btn btn-primary mb-2"
                >
                  ¡Únete a Umbani!
                </Button>
                <BacktoLogin className="text-center" onClick={this.handleClick}>
                  ¿Ya tienes una cuenta? Inicia aquí
                </BacktoLogin>
                {/* <Button onClick={this.handleClick} className="btn btn-primary">¿Tienes una cuenta? ¡Vuelve al login aquí!</Button> */}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
