import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
export const RestaurantMenu = () => {
const [resInfo, setresInfo] = useState(null);

const params = useParams();
console.log(params);

    useEffect ( () => {
        fetchMenu();
    }, []);

 const fetchMenu = async () => {
    const dataCard = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.051602&lng=77.57852&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await dataCard.json();
    console.log(json);
    setresInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setresInfo(json?.data);
 };

 if (resInfo === null) {
    return <Shimmer />
 }



  return (
  
  <div>{  resInfo.map((res) => {
    const { name, isopen, index, locality, id, avgRating, cloudinaryImageId } = res.info;
    return (
        
        <div key={cloudinaryImageId} >
        <li  >{name}</li>
        <li  >{locality}</li>
        <li >{isopen}</li>
        <li >{id}</li>
        <li >{avgRating}</li>
        
 
        </div>
        
       
    )
})
}</div>
    


  );
};
