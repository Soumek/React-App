import React, { Component, Fragment } from "react";
import Header from '../Layout/Header'
import {CSSTransition} from 'react-transition-group';
import Aside from './Aside'
import Content from './Content'
import {HomeContainer} from '../Layout/HeaderStyles';

/*Se puee usar rutas, pero es incomodo, ya que tengo que especificar cada ruta para cada interfaz, si el home etc */

  
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
      <Fragment>
      <Header handleOpenAside={this.handleOpenAside} />
      <HomeContainer className="container-fluid">
      <div className="row">
      <CSSTransition
      timeout={300}
        in={this.state.openAside}
        classNames="menu"
      >
      <Fragment>{this.state.openAside &&(<Aside/>)}</Fragment>
      </CSSTransition>
      <Content routes={routes} />
        
  
      </div>
      </HomeContainer>
      </Fragment>
    );
  }
}
