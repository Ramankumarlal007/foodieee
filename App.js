import React from "react";
import ReactDOM from "react-dom";



const ReactElement = (
<>
<h1>THis is React Element</h1>
<h2>THis is React Element</h2>
<h3>THis is React Element</h3>

</>

);

const Icecream = () => (
<>
<div>Icream is good for health</div>
<div>Icream is good for health</div>
{ReactElement}
</>

);


const HeadingElement = () => {
    return (
       <>
        
       
        <Icecream/>
        <Icecream/>
       </>
    )
}

const title = (
    <div> 
    <h1>Yummy Delight choclaty Icecream. 🍦</h1>
    <h1>Yummy Delight choclaty Icecream. 🍦</h1>
    {HeadingElement()}
    <HeadingElement></HeadingElement>
    <HeadingElement/>
    </div>
    
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);