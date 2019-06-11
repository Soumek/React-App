import React, { Component } from 'react'

export default class NuevaRuta extends Component {
    render() {
        return (
<section className="row">
        <Mutation
          mutation={AUTENTICAR_USUARIO}
          variables={{ usuario, password }}
        >
          {(usuarioAutenticar, { loading, error, data }) => {
            return (
              <form
                onSubmit={e => this.iniciarSesion(e, usuarioAutenticar)}
                className="d-flex flex-column mt-3 form-group w-75 "
              >
                {error && <Error error={error} />}
                <div className="position-relative mb-2 input-group">
                  <div className="input-group-prepend">
                    <IconWrapper className="input-group-text">
                      <Icon className="far fa-user" />
                    </IconWrapper>
                  </div>
                  <AuthInputs
                    type="text"
                    name="usuario"
                    onChange={this.actualizarState}
                    value={usuario}
                    className="form-control "
                    placeholder="Usuario"
                  />
                </div>
                <div className="position-relative mb-2 input-group">
                  <div className="input-group-prepend">
                    <IconWrapper className="input-group-text">
                      <Icon className="fa fa-lock" />
                    </IconWrapper>
                  </div>
                  <AuthInputs
                    type="password"
                    name="password"
                    onChange={this.actualizarState}
                    value={password}
                    className="form-control "
                    placeholder="Contraseña"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading || this.validarForm()}
                  className="btn btn-primary mb-2"
                >
                  Ingresar
                </Button>
                <Button
                  type="button"
                  onClick={this.handleClick}
                  className="btn btn-primary"
                >
                  ¿No tienes una cuenta? ¡Regístrate aquí!
                </Button>
              </form>
            );
          }}
        </Mutation>
      
            </section>
        )
    }
}
