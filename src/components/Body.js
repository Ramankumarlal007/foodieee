import RestroCard from "./RestaurantCard";
import restaurantsList from "../utilis/mockData";
import { useState } from "react";

let practise = [ 
  { 
      "info": {
        "id": "6095945",
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
        "avgRating": 3.8,}
    },

     
    
    { 
      "info": {
        "id": "6095974",
        "name": "KFC",
        "cloudinaryImageId": "h",
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

    { 
      "info": {
        "id": "6095974",
        "name": "KFC",
        "cloudinaryImageId": "hp",
        "locality": "KODIGEHALLI",
        "areaName": "Maruthi Layout",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Sweets",
          "Ice Cream"
        ],
        "avgRating": 5.2,}
    },
]





const Body = function () {
const [Restrolist,  setRestrolist] = useState(restaurantsList)
  

    return (
      <>
        <div className="Center">
        <div className="btn">
        <button  onMouseOver = { () => console.log("btn clicked")}
         >Top rated Restaurant</button>         
         {/* <button  onClick = { () => {restaurantsList = restaurantsList.filter( res => res.info.avgRating > 4.1);
        console.log(restaurantsList); 
        }}
         >Restaurant list</button>           */}
         </div>

         <div>
         <button onClick={() => { 
  const filteredList = Restrolist.filter((res) => res.info.avgRating > 4.2);
  setRestrolist(filteredList);
}}>restro</button>
         </div>

          <div className="restroContainer">
            {/* <RestroCard restroData={restaurantsList[0]} />
            <RestroCard restroData={restaurantsList[1]} />
            <RestroCard restroData={restaurantsList[2]} />
            <RestroCard restroData={restaurantsList[3]} />
            
            <RestroCard restroData={restaurantsList[5]} />
            <RestroCard restroData={restaurantsList[6]} />
            <RestroCard restroData={restaurantsList[7]} />
            <RestroCard restroData={restaurantsList[8]} /> */}
  
  
              {Restrolist.map( (restaurant, index) => {
       return <RestroCard key = {restaurant.info.cloudinaryImageId} restroData = {restaurant} /> }
   )}
  
  
  
  
            {/* <RestroCardd restraunt = "PFC Chicken"
          time = "30-35 mins"
          cusines = "Chicken Berger"
          starrating = "rating 4.8"/> */}
          </div>
        </div>
      </>
    );
  };

  export default Body;