import React from "react";
import ReactDOM from "react-dom/client";
import header from "./src/components/Header";
import Body from "./src/components/Body";
// import Button from "./src/components/Button";


const App = () => {
console.log(<Body/>);


 
  return (
    <>

    
      {header()}
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());


// const Body = () = {
// Local State Variable - Super powerful variable
// const arr = useState(resList);

// const [listOfRestaurants, setListOfRestraunt] = arr;

// const ListOfRestaurants = arr[0];
// const setListOfRestraunt = ørr[1];