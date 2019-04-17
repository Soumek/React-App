import React from "react";
import logo from "../../../assets/img/logo.jpg";
export default function NormalItem() {
  return (
    <div className="carouselitem d-flex align-items-center ml-4">
      <div className="carouselitem-wrapper d-flex justify-content-center align-items-center">
        <img src={logo} />
      </div>
    </div>
  );
}
