import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        Registro
        <button onClick={this.props.onFormChange} className="btn btn-primary">¿No tienes una cuenta? ¡Regístrate aquí!</button>
      </div>
    )
  }
}
