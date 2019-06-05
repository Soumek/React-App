import {lazy} from 'react';
// import Home from "../componentes/Home/Home.js";
// import Admin from "../componentes/Admin/Admin.js";
// import NuevoCliente from '../componentes/Admin/NuevoCliente.js';
// import Sandwiches from "../componentes/Sandwich.js";
// import Restaurantes from "../componentes/Home/Content/Restaurants/Restaurantes.js";
// import RestaurantView from "../componentes/Home/Content/Restaurants/Restaurant/RestaurantView.js"
// import Cart from "../componentes/Cart.js";
// import Login from "../componentes/Auth/Login.js"
// import NoMatch from "../componentes/NoMatch.js"
const Home= lazy(()=>import('../componentes/Home/Home.js'));
const Admin= lazy(()=>import('../componentes/Admin/Admin.js'));
const NuevoCliente= lazy(()=>import('../componentes/Admin/NuevoCliente.js'));
const Sandwich= lazy(()=>import('../componentes/Sandwich.js'));
const Restaurantes= lazy(()=>import('../componentes/Home/Content/Restaurants/Restaurantes.js'));
const RestaurantView= lazy(()=>import('../componentes/Home/Content/Restaurants/Restaurant/RestaurantView.js'));
const Cart= lazy(()=>import('../componentes/Cart.js'));
const Login= lazy(()=>import('../componentes/Auth/Login.js'));
const NoMatch= lazy(()=>import('../componentes/NoMatch.js'));
const routes = [
  
  {
    path: "/sandwiches",
    component: Sandwich
  },
  {
    path: "/home",
    component: Home,
    routes: [
      
      {
        path: "/home",
        icon:"utensils",
        nombre:"Restaurantes",
        component: Restaurantes,
        routes:[
          {
            path:"/home/restaurantes/:id",
            component:RestaurantView
          }
        ]
      },
      {
        path: "/home/farmacias",
        icon:"pills",
        nombre:"Farmacias",
        component: Cart
      },
      

    ]
  },
  {
    path:"/admin",
    component:Admin,
    routes:[
      {
        path:"/admin/añadircliente",
        icon:"users",
        nombre:"Añadir Cliente",
        component:NuevoCliente
      }
    ]
  }
  ,
  {
    path:"/:wtf",
    component:NoMatch
  },
  
  {
    path:"/",
    component:Login
  }
 
  
];

export default routes;
