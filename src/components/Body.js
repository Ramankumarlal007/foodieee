import RestroCard from "./RestaurantCard";
import restaurantsList from "../utilis/mockData";




const Body = function () {
    return (
      <>
        <div className="Center">
          <div>
            Search <input type="search" name="search" id="" />
          </div>
          <div className="restroContainer">
            {/* <RestroCard restroData={restaurantsList[0]} />
            <RestroCard restroData={restaurantsList[1]} />
            <RestroCard restroData={restaurantsList[2]} />
            <RestroCard restroData={restaurantsList[3]} />
            <RestroCard restroData={restaurantsList[4]} />
            <RestroCard restroData={restaurantsList[5]} />
            <RestroCard restroData={restaurantsList[6]} />
            <RestroCard restroData={restaurantsList[7]} />
            <RestroCard restroData={restaurantsList[8]} /> */}
  
  
              {restaurantsList.map( (restaurant, index) => {
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