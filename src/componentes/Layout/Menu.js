import React, { Component} from 'react'
import {Icon} from './HeaderStyles';
import {Link} from 'react-router-dom'
export default class Menu extends Component {
  render() {
    return (
      <div className="row ">
        <div className="col-md-3" onClick={this.props.onOpenAside}><Icon className="fa fa-bars"/></div>
        <div className="col-md-9"><Link to="/home">Umbani</Link></div>
      </div>
    )
  }
}
