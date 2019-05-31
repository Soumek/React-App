import React from 'react'

export default function AdminContent(props) {
    return (
        <div>
         { `Bienvenido! ${props.session.usuario}`}
        </div>
    )
}
