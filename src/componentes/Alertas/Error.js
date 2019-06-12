import React from 'react'

const Error=({error}) => {
   
  if (error.message) {
    const re = /GraphQL error: /gi;
    error = error.message.replace(re, '');

  }
  return (
    <p className="alert alert-danger py-3 text-center my-3">
        {error}
    </p>
  )
}
export default Error;