import React, { Fragment } from "react";
import { Icon, NavItem } from "./AdminStyles";
export default function AdminAside(props) {
    const rutas = props.routes;
    return (
        rutas.map((item, i) =>( 
            <Fragment>
                <NavItem key={i} exact to={`${item.path}`} activeClassName="active">
                    <Icon className={`fa fa-${item.icon}`} />
                    <span>{item.nombre}</span>
                </NavItem>
            </Fragment>
        )

    ))
}
