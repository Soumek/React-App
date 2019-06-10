export const routesjson=`
  {
    "jsonroutes":[
    {
      "path": "/sandwiches",
      "component": "Sandwich",
      "url":"Sandwich"
    },
    {
      "path": "/home",
      "component": "Home",
      "url":"Home/Home",
      "routes": [
      
      {
        "path": "/home",
        "icon":"utensils",
        "nombre":"Restaurantes",
        "component": "Restaurantes",
        "routes":[
        {
          "path":"/home/restaurantes/:id",
          "component":"RestaurantView"
        }
        ]
      },
      {
        "path": "/home/farmacias",
        "icon":"pills",
        "nombre":"Farmacias",
        "component": "Cart"
      }
      

      ]
    },
    {
      "path":"/admin",
      "component":"Admin",
      "url":"Admin/Admin",
      "routes":[
      {
        "path":"/admin/añadircliente",
        "icon":"users",
        "nombre":"Añadir Cliente",
        "component":"NuevoCliente"
      }
      ]
    }
    ,
    {
      "path":"/:wtf",
      "component":"NoMatch",
      "url":"NoMatch"
    },
    {
      "path":"/",
      "component":"Login",
      "url":"Auth/Login"
    }
    ]
  }

  
  
  `
  export default routesjson;
