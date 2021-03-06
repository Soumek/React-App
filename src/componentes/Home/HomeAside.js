import React, { Fragment } from "react";
import { Icon, NavItem } from "./HomeStyles";
export default function HomeAside(props) {
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
