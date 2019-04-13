import React, { Component} from 'react'
import {Icon} from './HeaderStyles';
export default class Menu extends Component {
  render() {
    return (
      <div className="row ">
        <div className="col-md-3" onClick={this.props.onOpenAside}><Icon className="fa fa-bars"/></div>
        <div className="col-md-9">Umbani</div>
      </div>
    )
  }
}
