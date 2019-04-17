import React, { Component } from 'react';
import ActiveItem from './HCarousel/ActiveItem';
import NormalItem from './HCarousel/NormalItem';

export default class HCarouselItem extends Component {
  state={
    activeItem:false
  }
  handleClickedItem=()=>{
    console.log("clicked");
  }
  
 
  render() {
    if(this.state.activeItem){
      return <ActiveItem onClick={this.handleClickedItem}/>
    }
    else{
      return <NormalItem onClick={this.handleClickedItem}/>
    }
   
  }
}
