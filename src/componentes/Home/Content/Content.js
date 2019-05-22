import React, { Component, Fragment } from 'react'
import {withRouter, Switch} from 'react-router-dom'
import RouteWithSubRoutes from '../../RouteWithSubRoutes';
import {ContentWrapper,ContentTitle} from '../../Layout/HeaderStyles';
import {CSSTransition} from 'react-transition-group';
import Carousels from './Carousel/Carousels';



 class Content extends Component {
  

  render() {
    const {routes}=this.props;
    return (


<CSSTransition
      timeout={500}
        in={this.props.asideGone}
        classNames="content"
      

      >
      <Fragment><ContentWrapper className="col-md-9 mt-4 container">
        <ContentTitle className="d-flex justify-content-start">
          <h2>Ordena lo más destacado de la semana</h2>
        </ContentTitle>
        <Carousels/>
        
        
    
        
        {/* Lo comenté porque en produccion genera problemas, cualquier cosa se descomenta. */}
        
          {/* <Route  path="/home" routes={routes} component={Restaurantes}/> */}
        <Switch>
        {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      </Switch>
      </ContentWrapper></Fragment>
      </CSSTransition>





      
    )
  }
}
export default withRouter(Content);