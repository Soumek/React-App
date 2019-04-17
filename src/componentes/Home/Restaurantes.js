import React, { Component } from 'react';
import HorizontalCarousel from './HorizontalCarousel';
import RestaurantView from './RestaurantView';
export default class Restaurantes extends Component {
  render() {
    return (
      <section className="mt-5">
        <HorizontalCarousel/>
        <RestaurantView/>
      </section>
    )
  }
}
