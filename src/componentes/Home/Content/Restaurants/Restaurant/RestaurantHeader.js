import React from 'react'
import {Rheader} from '../../../HomeStyles';
import logo from "../../../../../assets/img/logo.jpg";
export default function RestaurantHeader() {
  return (
    <Rheader className="mb-5">
        <div className="row">
            <div className="col-md-3 mb-3 d-flex justify-content-around align-items-center px-0">   
                <img src={logo} alt="" /><span>Parrilladas "El Ancla"</span>
            </div>
            <div className="col-md-9 d-flex justify-content-center align-items-center mb-3">
                <h5>Los más pedidos 8 Productos</h5>
            </div>
            </div>
    </Rheader>
  )
}
