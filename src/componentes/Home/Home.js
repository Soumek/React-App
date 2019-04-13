import React, { Component } from "react";
import { Link,Switch,Route } from "react-router-dom";
import Header from '../Layout/Header'
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import {CSSTransition} from 'react-transition-group';
import Aside from './Aside'
import Content from './Content'
import Bus from '../Bus'
/*Se puee usar rutas, pero es incomodo, ya que tengo que especificar cada ruta para cada interfaz, si el home etc */
import "../../assets/css/transitions.css";
  
export default class Home extends Component {
  state={
    openAside:true
  }
  handleOpenAside=()=>{
   if(this.state.openAside){
    this.setState({
      openAside:false
    })
   } else{
    this.setState({
      openAside:true
    })
   }
    
  }
  // renderOpenAside=()=>{
  //   if(this.state.openAside){
  //     return <Aside/>
  //   }
  // }
  render() {
   const {routes}=this.props;
    return (
      <div>
      <Header handleOpenAside={this.handleOpenAside} />
      <div className="container-fluid">
      <div className="row">
      {/* <CSSTransition
      timeout={3000}
        in={this.state.openAside}
        classNames="menu"
      > */}
      {this.state.openAside &&(<Aside/>)}
      {/* </CSSTransition> */}
      <Content routes={routes} />
        
  
      </div>
      </div>
      </div>
    );
  }
}
