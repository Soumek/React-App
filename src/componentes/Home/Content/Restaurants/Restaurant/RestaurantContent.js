import React,{Component,Fragment} from "react";
import RestaurantCard from './RestaurantCard';
import {RestaurantContentWrapper} from '../../../HomeStyles';

export default class RestaurantContent extends Component {
  state={
    productos:[]
  }
  componentDidMount(){
    this.setState({
      productos:[{
        titulo:"Pinchos de pollo",
        descripcion:"Pinchos de pollo",
        precio:"5.00",
        descuento:"descuento"
      },
      {
        titulo:"Filete de Cerdo",
        descripcion:"Filete de Cerdo",
        precio:"25.00"
      },
      {
        titulo:"Pinchos de pollo",
        descripcion:"Pinchos de pollo",
        precio:"5.00"
      },
      {
        titulo:"Filete de Cerdo",
        descripcion:"Filete de Cerdo",
        precio:"25.00"
      },
      {
        titulo:"Pinchos de pollo",
        descripcion:"Pinchos de pollo",
        precio:"5.00"
      },
      {
        titulo:"Filete de Cerdo",
        descripcion:"Filete de Cerdo",
        precio:"25.00"
      },
      {
        titulo:"Pinchos de pollo",
        descripcion:"Pinchos de pollo",
        precio:"5.00"
      }
    ]
    })
  }
  render() {
    return (
      <Fragment>
        <RestaurantCard productos={this.state.productos}/>
      </Fragment>
    )
  }
}
