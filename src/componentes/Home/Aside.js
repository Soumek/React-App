import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {Icon, NavAside, NavItem} from '../Layout/HeaderStyles'
import styled from 'styled-components'
export default class Aside extends Component {
  render() {
    return (
      <NavAside className="col-md-2 px-0 ">
        <div className="d-flex align-items-start flex-column">
          <NavItem to="/home/restaurantes" className="mt-3 "><Icon className="fa fa-utensils "/><span>Restaurantes</span></NavItem>
          <NavItem to="/home/cart"><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
          <NavItem><Icon className="fa fa-utensils"/><span>Restaurantes</span></NavItem>
        </div>
      </NavAside>
    );
  }
}
