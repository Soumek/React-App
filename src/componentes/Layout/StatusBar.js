import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import user from "../../assets/img/user.png";
import styled from "styled-components";
import { Icon, UserIcon } from "./HeaderStyles";
import UserMenu from "./UserMenu";

export default class StatusBar extends Component {
  state = {
    openUserMenu: false
  };

  handleUserMenu = () => {
    if (this.state.openUserMenu) {
      this.setState({
        openUserMenu: false
      });
    } else {
      this.setState({
        openUserMenu: true
      });
    }
  };
  renderUserMenu = () => {
    if (this.state.openUserMenu) {
      return <UserMenu/>;
    }
  };
  render() {
    
    return (
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-4 text-center">
          <Icon className="fa fa-map-marker-alt" />
        </div>
        <div className="col-md-4 d-flex justify-content-center position-relative">
          <UserIcon onClick={this.handleUserMenu}>
            <img src={user} />
          </UserIcon>
        
             {this.renderUserMenu()}
         
        </div>
       
        <div className="col-md-4 text-center">
          <Icon className="fa fa-shopping-basket" />
        </div>
      </div>
     
    );
  }
}
