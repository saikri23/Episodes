import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ResList from "../utils/mockData";
import Schimmer from "./Schimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ResData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResData, setFilteredResData] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    console.log(json);
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(ResData);
  };

  if (onlineStatus === false)
    return <h1>You are not connected to a active internet !!!</h1>;

  if (ResData?.length === 0) {
    return <Schimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 mx-2 bg-green-300 rounded-md"
            onClick={() => {
              console.log(searchText);
              const filList = ResData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResData(filList);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4">
          <button
            className="mx-2 px-4 bg-orange-300 flex items-center rounded-md"
            onClick={() => {
              const filterList = ResList.filter(
                (lis) => lis.info.avgRating >= 4
              );
              setResData(filterList);
            }}
          >
            Above 4* Rating
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResData?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resobj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
