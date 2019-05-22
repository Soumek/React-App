import Home from "../componentes/Home/Home.js";
import Sandwiches from "../componentes/Sandwich.js";
import Restaurantes from "../componentes/Home/Content/Restaurants/Restaurantes.js";
import RestaurantView from "../componentes/Home/Content/Restaurants/Restaurant/RestaurantView.js"
import Cart from "../componentes/Cart.js";
import Login from "../componentes/Auth/Login.js"
import NoMatch from "../componentes/NoMatch.js"
const routes = [
  
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/home",
    component: Home,
    routes: [
      
      {
        path: "/home/cart",
        component: Cart
      },
      {
        path: "/home",
        component: Restaurantes,
        routes:[
          {
            path:"/home/restaurantes/:id",
            component:RestaurantView
          }
        ]
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
