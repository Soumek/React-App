import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { CREAR_SUBRUTA } from "../../mutations";
import Error from "../Alertas/Error";
const initialState = {
  nombre: "",
  nombresubruta: "",
  path: "",
  icono: "",
  ubicacion: ""
};
export default class NuevaRuta extends Component {
  state = {
    ...initialState
  };
  actualizarState = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  crearSubRuta = (e, subRuta) => {
    e.preventDefault();
    subRuta().then((data)=>{
     
      console.log(data);
    })
  };
  validarForm = () => {
    const {nombresubruta, path, icono, ubicacion } = this.state;
    const noValido = !nombresubruta || !path || !icono || !ubicacion;
    return noValido;
  };
  enviarVariables=()=>{
    const {nombresubruta,path, icono, ubicacion } = this.state;
    const input={
      nombresubruta,
      path,
      icono,
      ubicacion
    }
    return {input};
  }
  render() {
    
    // Los datos que estan representados como inputs deben ser enviados tal cual
    return (
      <section className="row">
        <Mutation
          mutation={CREAR_SUBRUTA}
          variables={{...this.enviarVariables()}}
        >
          {(subRuta, { loading, error, data }) => {
            return (
              <form
                className="col-md-8 m-3"
                onSubmit={e => this.crearSubRuta(e, subRuta)}
              >
              {error && <Error error={error} />}
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Nombre de la Subruta</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="nombresubruta"
                        className="form-control"
                        placeholder="Nombre de la subruta"
                        onChange={this.actualizarState}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>
                      Path de la subruta(Despues de la ruta principal)
                    </label>
                    <input
                      type="text"
                      name="path"
                      className="form-control"
                      placeholder="Path a mostrar en la url"
                      onChange={this.actualizarState}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Ícono de la subruta</label>
                    <input
                      type="text"
                      name="icono"
                      className="form-control"
                      placeholder="Path a mostrar en la url"
                      onChange={this.actualizarState}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Ubicación del componente de la subruta</label>
                    <input
                      type="text"
                      name="ubicacion"
                      className="form-control"
                      placeholder="'/componentes/'Ruta hacia el componente"
                      onChange={this.actualizarState}
                    />
                  </div>
                </div>
                <button
                  disabled={this.validarForm()}
                  type="submit"
                  className="btn btn-success float-right"
                >
                  Crear SubRuta
                </button>
              </form>
            );
          }}
        </Mutation>
      </section>
    );
  }
}
