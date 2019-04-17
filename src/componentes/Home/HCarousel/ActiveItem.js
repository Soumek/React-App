import React from "react";

export default function ActiveItem() {
  return (
    <div className="carouselitem d-flex align-items-center ml-4">
      <div className="carouselitem-wrapper d-flex justify-content-center align-items-center">
        <div className="carouselitem-inner d-flex justify-content-center align-items-center">
          <i className="fa fa-check carouselitem-checkicon" />
        </div>
      </div>
    </div>
  );
}
