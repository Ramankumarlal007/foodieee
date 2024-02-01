import React from "react";
import ReactDOM from "react-dom/client";
import header from "./src/components/Header";
import Body from "./src/components/Body";


const App = () => {
  return (
    <>
      {header()}
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
