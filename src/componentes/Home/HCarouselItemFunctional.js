import React from "react";
import logo from "../../assets/img/logo.jpg";

export default function HCarouselItem(props) {
  function ActiveItem() {
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
  function NormalItem() {
    return (
      <div className="carouselitem d-flex align-items-center ml-4">
        <div className="carouselitem-wrapper d-flex justify-content-center align-items-center">
          <img src={logo} />
        </div>
      </div>
    );
  }
  
  if(props.checked){
    return <ActiveItem onClick={props.handleActiveItem}/>
  } else{return <NormalItem onClick={props.handleActiveItem}/>}

}
 {/* <div>
    {isLoggedIn ? (
      <ActiveItem  />
    ) : (
      <NormalItem  />
    )}
  </div> */}