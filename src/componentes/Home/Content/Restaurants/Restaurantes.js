import React, { Component } from 'react';
import HorizontalCarousel from '../HCarousel/HorizontalCarousel';
import RestaurantView from './Restaurant/RestaurantView';
import RouteWithSubRoutes from '../../../RouteWithSubRoutes';
export default class Restaurantes extends Component {
  
  handleRestaurantView=()=>{
    if(this.props.location.pathname === "/home" || this.props.location.pathname === "/home/restaurantes" ){
      return <RestaurantView/>
    } else return null
  }
  componentDidMount(){

  }
  render() {
    return (
      <section className="mt-5">
        <HorizontalCarousel/>
     
        {this.handleRestaurantView()}

        {this.props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
        
        
      </section>
    )
  }
}
