import Home from "../componentes/Home/Home.js";
import Sandwiches from "../componentes/Sandwich.js";
import Bus from "../componentes/Bus.js";
import Cart from "../componentes/Cart.js";
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
        path: "/home/bus",
        component: Bus
      },  
      {
        path: "/home/cart",
        component: Cart
      }
    ]
  },
  {
    path:"/:wtf",
    component:NoMatch
  }
  
];

export default routes;
