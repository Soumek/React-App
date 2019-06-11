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


const LazyImport = ({url, ...props }) => {

const Componente= lazy(()=>import(`../componentes/${url}`));   
    return (
     <Componente {...props}/>
    );
};

//<route.component {...props} {...this.props} refetch={this.props.refetch}  routes={route.routes} />


export default class RouteWithSubRoutesJson extends Component {
  
  render() {  
    const route =this.props
    
    return (

     <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <Suspense fallback={<Loading/>}>
          <LazyImport component={route.component} url={route.url} {...this.props}/>
        </Suspense>
        

      )}
    />
    )
  }
}

