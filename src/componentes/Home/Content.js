import React, { Component, Fragment } from 'react'
import AsyncSelect from 'react-select/lib/Async';
import {withRouter, Switch,Route} from 'react-router-dom'
import RouteWithSubRoutes from '../RouteWithSubRoutes';
import Bus from '../Bus'

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
  state={
    selectedOption:""
  }
  selectedOption=e=>{
    this.setState({
      selectedOption:e.value
    })
  }

  render() {
    const {routes}=this.props;
    return (
      <section className="col-md-9 d-flex justify-content-center mt-5">
        <div className="card w-75 ">
        <div className="card-title d-flex justify-content-center">
          <AsyncSelect
          className="w-75 mt-4"
          placeholder="Qué deseas buscar?"
          defaultOptions={false}
          loadOptions={promiseOptions}
          onChange={this.selectedOption}
          />
        </div>
        <Switch>
        <Route exact path="/home" component={Bus}/>
        {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} results={this.state.selectedOption}/>
      ))}
        </Switch>
        </div>
      </section>
    )
  }
}
export default withRouter(Content);