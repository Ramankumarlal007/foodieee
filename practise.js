

let practise = [ 
    { 
        "info": {
          "id": "609594",
          "name": "CakeZone",
          "cloudinaryImageId": "06d30dd1c567076774f1a3f661ff80d7",
          "locality": "KODIGEHALLI",
          "areaName": "Maruthi Layout",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Sweets",
            "Ice Cream"
          ],
          "avgRating": 4.1,}
      },

      { 
        "info": {
          "id": "609594",
          "name": "CakeZone",
          "cloudinaryImageId": "06d30dd1c567076774f1a3f661ff80d7",
          "locality": "KODIGEHALLI",
          "areaName": "Maruthi Layout",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Sweets",
            "Ice Cream"
          ],
          "avgRating": 4.5,}
      }, 
      
      { 
        "info": {
          "id": "609594",
          "name": "CakeZone",
          "cloudinaryImageId": "06d30dd1c567076774f1a3f661ff80d7",
          "locality": "KODIGEHALLI",
          "areaName": "Maruthi Layout",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Sweets",
            "Ice Cream"
          ],
          "avgRating": 4.8,}
      },
]


// console.log(practise[1].info.avgRating);

let restaurantsList = practise.filter( (restaurant) => restaurant.info.avgRating > 4) 

console.log(restaurantsList);