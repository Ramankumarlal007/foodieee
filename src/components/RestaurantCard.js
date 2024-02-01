import {CDN_URL} from "../utilis/constant";


const RestroCard = (props) => {
    // console.log(props); previous example
    const { restroData } = props;
  
  const {cloudinaryImageId, name, areaName, costForTwo, locality, cuisines} = restroData?.info;
  
    return (
      <>
        <div className="Card" style={{ backgroundColor: "#414141" }}>
          <img
            className="res-logo"
            src={
              CDN_URL +
              cloudinaryImageId
            }
            style={{ borderRadius: "10px" }}
          />
          <h3 style={{ backgroundColor: "#414141", color: "white" }}>
            {name}
          </h3>
          <h3 style={{ backgroundColor: "#414141", color: "white" }}>
            {areaName}
          </h3>
          <h3 style={{ backgroundColor: "#414141", color: "white" }}>
            {costForTwo}
          </h3>
          <h3 style={{ backgroundColor: "#414141", color: "white" }}>
            {locality}
          </h3>
          <h3 style={{ backgroundColor: "#414141", color: "white" }}>
            {cuisines.join(" , ")}
          </h3>
          <h3 style={{ backgroundColor: "#414141", color: "white" }}>
            {restroData.info.sla.slaString}
          </h3>
        </div>
      </>
    );
  };

  export default RestroCard;



  
// const RestroCardd = (props)  => {
//   const {restraunt, time, cusines, starrating} = props
//   return (
//     <>
//       <div className="Card" style={{backgroundColor: "#414141"}}>
//       <img class="sc-dcJsrY kMtDjj" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cace805a6ba74137571d0f7ac92302b1" alt="Chaayos Chai+Snacks=Relax" height= "90px"  style={{borderRadius: "10px"}} />
//       <h3 style={{backgroundColor: "#414141", color: "white" }}>{restraunt}</h3>
//       <h3 style={{backgroundColor: "#414141" , color: "white"}}>{time}</h3>
//       <h3 style={{backgroundColor: "#414141" , color: "white"}}>{cusines}</h3>
//       <h3 style={{backgroundColor: "#414141" , color: "white"}}>{starrating}</h3>
//       </div>
//     </>
//   )
// }