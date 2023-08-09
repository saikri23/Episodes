import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ResList from "../utils/mockData";
import Schimmer from "./Schimmer";

const Body = () => {
  const [ResData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResData,setFilteredResData]=useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22%"
    );
    const json = await data.json();
    console.log(json);
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
    console.log(ResData);
  };

  if (ResData?.length === 0) {
    return <Schimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(searchText);
            const filList=ResData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredResData(filList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter-btn">
        <button
          className="rating-btn"
          onClick={() => {
            const filterList = ResList.filter((lis) => lis.info.avgRating >= 4);
            setResData(filterList);
          }}
        >
          Above 4* Rating
        </button>
      </div>
      <div className="res-container">
        {
          filteredResData?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resobj={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
