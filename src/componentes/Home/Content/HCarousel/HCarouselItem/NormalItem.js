import React, { Component } from 'react'
// import logo from "../../../assets/img/logo.jpg";
export default class NormalItem extends Component {
  
  render() {
    return (
      
<div onClick={this.props.onClick} className="carouselitem d-flex align-items-center ml-4">
      <div className="carouselitem-wrapper d-flex justify-content-center align-items-center">
        <span>{this.props.id}</span>
      </div>
    </div>
    )
  }
}
