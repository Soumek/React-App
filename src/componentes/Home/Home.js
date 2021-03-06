import React, { Component, Fragment } from "react";
import Header from '../Layout/Header/Header';
import {CSSTransition} from 'react-transition-group';
import Aside from './Aside'
import Content from './Content/Content'
import {HomeContainer} from './HomeStyles';
import homeroutesjson from '../../routes/homeroutesjson';

const {homesubroutes}=JSON.parse(homeroutesjson);  
 class Home extends Component {
  state={
    openAside:true
  }
  handleOpenAside=()=>{
    this.setState(prevState => ({
      openAside: !prevState.openAside
    }));
  }
  handleRedireccion=()=>{
    
  }

  componentWillMount(){
    const sesionActual=this.props.session.obtenerUsuario;
    // if(!sesionActual){
    //  this.props.history.push('/');
    // }
  }
 
  
  render() {
    console.log(homesubroutes);
    return (
      <Fragment>
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
      <Fragment><Aside routes={homesubroutes} /></Fragment>
      </CSSTransition>
      <Content asideGone={this.state.openAside} routes={homesubroutes} />
        
  
      </div>
      </HomeContainer>
      </Fragment>
    );
  }
}

export default Home;