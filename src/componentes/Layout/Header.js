import React, { Component } from 'react'

import Buscador from './Buscador';
import Menu from './Menu';
import StatusBar from './StatusBar';

import {NavHeader,Nav} from './HeaderStyles';

class Header extends Component {
  
  render() {
    return (
      <NavHeader className="container-fluid d-flex justify-content-between align-items-center">
        <Nav className="row ">
          <div className="col-md-3 d-flex align-items-center"><Menu onOpenAside={this.props.handleOpenAside}/></div>
          <div className="col-md-5 d-flex justify-content-center flex-column"><Buscador/></div>
          <div className="col-md-4"><StatusBar/></div>
        </Nav>

      </NavHeader>
    )
  }
}
export default Header;