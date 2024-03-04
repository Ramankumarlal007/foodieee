import React from "react";
import ReactDOM from "react-dom/client";
import header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/ContactUs";
import { Error } from "./src/components/Error";
import Notion from "./src/components/Notion";
import { About } from "./src/components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



const App = () => {
console.log(<Body/>);
  return (
    <>
      {header()}
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,

  },

  {
    path: "/Notion",
    element: <Notion/>,
  },


  {
    path: "/Contact",
    element: Contact()
  },
 
  { path: "/About", 
    element: <About/>,},

  // {
  //   path: "*",
  //   element: <Error />
  // }


]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


// const Body = () = {
// Local State Variable - Super powerful variable
// const arr = useState(resList);

// const [listOfRestaurants, setListOfRestraunt] = arr;

// const ListOfRestaurants = arr[0];
// const setListOfRestraunt = ørr[1];