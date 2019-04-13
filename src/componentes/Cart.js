import React, { Component, Fragment } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <Fragment>
        <h1>Cart! and {this.props.results}</h1>
      </Fragment>
    )
  }
}
