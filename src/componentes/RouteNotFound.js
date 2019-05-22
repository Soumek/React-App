import React from 'react'
import {Redirect} from 'react-router-dom'

export default function RouteNotFound() {
  return (
  <Redirect to={{ state: { notFoundError: true } }} />
  )
}



