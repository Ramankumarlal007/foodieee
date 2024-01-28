import React from "react";
import ReactDOM from "react-dom";

const Image = () => {
  return (
    <svg
      class="_8pSp-"
      viewBox="0 0 559 825"
      height="49"
      width="34"
      fill="#fc8019"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
        fill="url(#paint0_linear_19447_66107)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_19447_66107"
          x1="445.629"
          y1="63.8626"
          x2="160.773"
          y2="537.598"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF993A"></stop>
          <stop offset="1" stop-color="#F15700"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

const header = () => {
  return (
    <>
      <div className="header">
        <Image />
        <ul className="unlist">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="Image">
          <img
            src="https://media.istockphoto.com/id/91830449/photo/shopping-cart-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=TdSjmadIv-i26fwhl9FcLoe4CUk2cdYwkK2Bof0NNM8="
            height="25px"
            alt="Cart"
          />
          <div>
            <span
              style={{
                fontSize: "25px",
                textAlign: "center",
                fontWeight: "bold",
                color: "blue",
              }}
            >
              Cart
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

let restaurants = [
  {
    "info": {
    "id": "452627",
    "name": "Chaayos Chai+Snacks=Relax",
    "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
    "locality": "RMS Layout",
    "areaName": "Sahakara Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Bakery",
    "Beverages",
    "Chaat",
    "Desserts",
    "Home Food",
    "Italian",
    "Maharashtrian",
    "Snacks",
    "Street Food",
    "Sweets"
    ],
    "avgRating": 4.4,
    "parentId": "281782",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-29 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {},
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "64754",
    "name": "A2B - Adyar Ananda Bhavan",
    "cloudinaryImageId": "pjg4r1tolb7hqi5eecgs",
    "locality": "Bhadrappa Layout",
    "areaName": "Hebbal",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "South Indian",
    "North Indian",
    "Sweets",
    "Chinese"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "22",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3.9,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-28 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-bhadrappa-layout-hebbal-bangalore-64754",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "757051",
    "name": "Theobroma",
    "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
    "locality": "Hebbala",
    "areaName": "Sahakar Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "1040",
    "avgRatingString": "4.5",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-28 23:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
    "shortDescription": "Perfect Cake Delivery",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
    "shortDescription": "Perfect Cake Delivery"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/theobroma-hebbala-sahakar-nagar-bangalore-757051",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {},
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/puliyogare-point-kalpana-chawla-road-hebbal-bangalore-369809",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {},
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/chai-point-brigade-magnum-hebbal-bangalore-200802",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {},
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/freshmenu-kodigehalli-main-road-sahakar-nagar-bangalore-589597",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {},
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-rmv-2nd-stage-sanjaynagar-bangalore-8032",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "15384",
    "name": "Subway",
    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    "locality": "HEBBAL",
    "areaName": "Esteem Mall",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "2",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-29 03:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-hebbal-esteem-mall-bangalore-15384",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "584668",
    "name": "Starbucks Coffee",
    "cloudinaryImageId": "182191ab163770437b62861a6f987709",
    "locality": "Rajendra Infotech Road",
    "areaName": "Sahakar Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Beverages",
    "Cafe",
    "Snacks",
    "Desserts",
    "Bakery",
    "Ice Cream"
    ],
    "avgRating": 4.3,
    "parentId": "195515",
    "avgRatingString": "4.3",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2.2,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-28 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-1e5ef0fe-786e-49e7-9e38-02c03b4680a0"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/starbucks-coffee-rajendra-infotech-road-sahakar-nagar-bangalore-584668",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }

]


const RestroCard = (props)  => {
  // console.log(props); previous example
  const {restroData} = props;
  return (
    <>
      <div className="Card" style={{backgroundColor: "#414141"}}>
      <img class="sc-dcJsrY kMtDjj" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cace805a6ba74137571d0f7ac92302b1" alt="Chaayos Chai+Snacks=Relax" height= "90px"  style={{borderRadius: "10px"}} />
      <h3 style={{backgroundColor: "#414141", color: "white" }}>{restroData[0].info.name}</h3>
      <h3 style={{backgroundColor: "#414141" , color: "white"}}>{restroData[0].info.areaName}</h3>
      <h3 style={{backgroundColor: "#414141" , color: "white"}}>{restroData[0].info.costForTwo}</h3>
      <h3 style={{backgroundColor: "#414141" , color: "white"}}>{restroData[0].info.locality}</h3>
      
      </div>
    </>
  )
}


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


const Body = function () {
  return (
    <>
      <div className="Center">
        <div>
          Search <input type="search" name="search" id="" />
        </div>
      <div className="Flex">
       <RestroCard  restroData = {restaurants}
       />
      
      
    
       {/* <RestroCardd restraunt = "PFC Chicken"
        time = "30-35 mins"
        cusines = "Chicken Berger"
        starrating = "rating 4.8"/> */}
      
      </div>
      </div>
    </>
  );
};
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
