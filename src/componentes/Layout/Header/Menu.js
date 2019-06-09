import React, { Component} from 'react'
import {Icon, MenuLogo} from './HeaderStyles';
export default class Menu extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-3" onClick={this.props.onOpenAside}><Icon className="fa fa-bars"/></div>
        <div className="col-9"><MenuLogo to="/home">Umbani</MenuLogo></div>
      </div>
    )
  }
}
