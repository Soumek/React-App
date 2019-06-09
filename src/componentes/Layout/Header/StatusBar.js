import React, { Component, Fragment } from "react";
import user from "../../../assets/img/user.png";
import { Icon, UserIcon, StatusBarWrapper } from "./HeaderStyles";
import UserMenu from "./UserMenu";

export default class StatusBar extends Component {
  state = {
    openUserMenu: false
  };

  handleUserMenu = () => {
    this.setState(prevState => ({
      openUserMenu: !prevState.openUserMenu
    }));
  };
  handleBlur=(e)=>{
    if(e && e.relatedTarget){
      e.relatedTarget.click();
    }
    this.setState({openUserMenu: false});
  }
  renderUserMenu = () => {
    if (this.state.openUserMenu) {
      return <UserMenu/>;
    }
  };
  render() {
    return (
      <StatusBarWrapper className="row d-flex justify-content-center align-items-center">
        <div className="col text-center">
          <Icon className="fa fa-map-marker-alt" />
        </div>
        <div className="col d-flex justify-content-center position-relative">
          <UserIcon   onClick={this.handleUserMenu} onBlur={this.handleBlur} tabIndex="1">
            <img src={user} alt="" />
          </UserIcon>
          <Fragment>{this.renderUserMenu()}</Fragment>
        </div>
        <div className="col text-center">
          <Icon className="fa fa-shopping-basket" />
        </div>
      </StatusBarWrapper>
    );
  }
}
