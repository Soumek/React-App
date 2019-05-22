import React, { Component } from 'react';
import ActiveItem from './ActiveItem';
import NormalItem from './NormalItem';

export default class HCarouselItem extends Component {
 
  handleClickedItem=(e)=>{
    this.props.onActive(this.props.id)
  }
  renderActivatedItem=()=>{
  
    if(this.props.activeItem===this.props.id){
      return <ActiveItem onClick={this.handleClickedItem} id={this.props.id} />
    }
    else{
      return <NormalItem onClick={this.handleClickedItem}  id={this.props.id}/>
    }
  }
  componentDidMount(){
    
  }
  render() {
    return(
      this.renderActivatedItem()
    )
   
  };
}
