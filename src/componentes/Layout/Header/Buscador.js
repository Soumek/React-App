import React, { Component, Fragment } from 'react'
import Select from 'react-select'
const options=[{
    label:"Chocolate",
    name:"chocolate"
},{
    label:"Fresa",
    name:"fresa"
},{
    label:"Ginger",
    name:"ginger"
}]
export default class Buscador extends Component {
  render() {
    return (
      <Fragment>
        <Select options={options}/>
      </Fragment>
    )
  }
}


