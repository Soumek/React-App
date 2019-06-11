export const homeroutesjson = `
  {
    "homesubroutes":[
      {
        "path": "/home",
        "icon":"utensils",
        "nombre":"Restaurantes",
        "component": "Restaurantes",
        "url":"Home/Content/Restaurants/Restaurantes",
        "routes":[
        {
          "path":"/home/restaurantes/:id",
          "component":"RestaurantView",
          "url":"Home/Content/Restaurants/Restaurant/RestaurantView"
        }
        ]
      },
      {
        "path": "/home/farmacias",
        "icon":"pills",
        "nombre":"Farmacias",
        "component": "Cart",
        "url":"Cart"
      }
    ]
  }

  
  
  `;
export default homeroutesjson;
