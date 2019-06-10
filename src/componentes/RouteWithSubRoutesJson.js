import React,{Component,Suspense, lazy} from 'react'
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


const LazyImport = ({ component,url }) => {
 
// const Componente= lazy(()=>import(`../componentes/${url}`));   
    return (
     <h1>
     hue
     </h1>
    );
};

//<route.component {...props} {...this.props} refetch={this.props.refetch}  routes={route.routes} />


export default class RouteWithSubRoutesJson extends Component {
  
  render() {  
    const routesjson =this.props
    console.log(routesjson);
    return (

     <Route
      exact={routesjson.exact}
      path={routesjson.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <Suspense fallback={<Loading/>}>
          <LazyImport component={routesjson.component} url={routesjson.url} />
        </Suspense>
        

      )}
    />
    )
  }
}

