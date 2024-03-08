const fetchMenu = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.051602&lng=77.57852&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
};
fetchMenu()