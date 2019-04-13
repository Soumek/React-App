import React, { Component, Fragment } from 'react'

export default class Bus extends Component {
  render() {
    return (
      <Fragment>
        <h1>Bus! and {this.props.results}</h1>
      </Fragment>
    )
  }
}
