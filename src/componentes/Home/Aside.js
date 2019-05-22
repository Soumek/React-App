import React, { Component } from "react";
import {Icon, NavAside, NavItem} from '../Layout/HeaderStyles'
import {withRouter} from 'react-router-dom'
class Aside extends Component {
 
  render() {

// Al parecer styled components genera problemas, es decir, sus estilos estan chocando con los de csstransitiongroup.
return (
      <NavAside className="col-md-2 px-0 ">
        <div className="d-flex align-items-start flex-column">
          <NavItem exact to="/home/restaurantes" activeClassName="active"><Icon className="fa fa-utensils "/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home/cart" activeClassName="active"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem exact to="/home1"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
        </div>
      </NavAside>
    );
  }
}
export default withRouter(Aside);