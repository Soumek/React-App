import React,{Component,Suspense} from 'react'
import {Route} from 'react-router-dom'
import Loading from './Loading/Loading';
/*Este componente se encarga de settear las rutas dependiendo de las rutas declaradas,
si existen mas rutas dependiendo del componente, este guarda sus rutas en las props del componente,
llamandolo asi ocmo this.props.routes, para declarar nuevas rutas internas. */
// export default function RouteWithSubRoutes(route, props) {
//   return (
//   <Route

//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />

//   )
// }


export default class RouteWithSubRoutes extends Component {
  
  render() {  
    const route =this.props
    return (

     <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <Suspense fallback={<Loading/>}>
        <route.component {...props} {...this.props} refetch={this.props.refetch} />
        </Suspense>
        

      )}
    />
    )
  }
}

