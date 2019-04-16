import React from 'react'
import logo from "../../assets/img/logo.jpg";

export default function HCarouselItem(props) {
  return (
    <div className="carouselaitem d-flex align-items-center ml-4">
        <div><img src={logo}/></div>
    </div>
  )
}
