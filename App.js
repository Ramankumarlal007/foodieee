import React from "react";
import ReactDOM from "react-dom/client";
import header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/ContactUs";
import { Error } from "./src/components/Error";
import Notion from "./src/components/Notion";
import { About } from "./src/components/About";
import { RouterProvider, createBrowserRouter, Outlet, useParams } from "react-router-dom";
import { RestaurantMenu } from "./src/components/RestaurntMenu";

const App = () => {
  console.log(<Body />);
  return (
    <>
      {header()}
      <Outlet />
      
    </>
  );
};



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Notion",
        element: <Notion />,
      },

      {
        path: "/Contact",
        element: Contact(),
      },

      { path: "/About", 
      element: <About /> },

      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],

    errorElement: <Error />,
  },

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
