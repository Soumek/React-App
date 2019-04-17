import React, { Component,Fragment } from 'react'
import RestaurantHeader from './RestaurantHeader';
import RestaurantContent from './RestaurantContent';
import {Spacer} from '../Layout/HeaderStyles';
export default class RestaurantView extends Component {
  render() {
    return (
      <section className="container-fluid">
      <Spacer className="mb-5 row"/>
        <RestaurantHeader/> 
        <RestaurantContent/>
      </section>
    )
  }
}
