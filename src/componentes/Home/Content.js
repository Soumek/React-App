import React, { Component, Fragment } from 'react'
import {withRouter, Switch,Route} from 'react-router-dom'
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import Restaurantes from '../Home/Restaurantes'
import {ContentTitle} from '../Layout/HeaderStyles';
import Carousels from './Carousels';
/* Async Select*/
const options=[{label:"Chocolate",value:"chocolate"},{label:"Vainilla",value:"vainilla"},{label:"Fresa",value:"fresa"}]
const filterColors = (inputValue) => {
  return options.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });
 class Content extends Component {


  render() {
    const {routes}=this.props;
    return (
      <section className="col-md-9 mt-4 container">
        <ContentTitle className="d-flex justify-content-start">
          <h2>Ordena lo más destacado de la semana</h2>
        </ContentTitle>
        <Carousels/>
        
        
        <Switch>
        <Route exact path="/home" component={Restaurantes}/>
        {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
        </Switch>

      </section>
    )
  }
}
export default withRouter(Content);