import React, { Component, Fragment } from "react";
import Header from '../Layout/Header'
import {Redirect} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Aside from './Aside'
import Content from './Content/Content'
import {HomeContainer} from '../Layout/HeaderStyles';

/*Se puee usar rutas, pero es incomodo, ya que tengo que especificar cada ruta para cada interfaz, si el home etc */

  
export default class Home extends Component {
  state={
    openAside:true,

    
  }
  handleOpenAside=()=>{
    this.setState(prevState => ({
      openAside: !prevState.openAside
    }));
  }
  handleRedireccion=()=>{
    
  }
  componentWillMount(){
    const actualUser=this.props.session.obtenerUsuario
    if(!actualUser){
      this.props.history.push('/');
    }
  }
  
  render() {
   const {routes}=this.props;
    return (
      <Fragment>
      {this.handleRedireccion()}
      <Header handleOpenAside={this.handleOpenAside} />
      <HomeContainer className="container-fluid">
      <div className="row">
      <CSSTransition
      timeout={500}
        in={this.state.openAside}
        classNames="menu"
        unmountOnExit
        appear
        
      >
      <Fragment><Aside/></Fragment>
      </CSSTransition>
      <Content asideGone={this.state.openAside} routes={routes} />
        
  
      </div>
      </HomeContainer>
      </Fragment>
    );
  }
}
