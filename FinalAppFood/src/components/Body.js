import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Schimmer from "./Schimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ResData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResData, setFilteredResData] = useState([]);
  const onlineStatus = useOnlineStatus();

  const {loggedInUser,setUserName}=useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
            data-testid="searchInput"
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
          <label className="px-4">UserName : </label>
          <input
            type="text"
            data-testid="userInput"
            className="border border-solid border-black rounded-sm"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="p-4 m-4">
          <button
            className="mx-2 px-4 bg-orange-300 flex items-center rounded-md"
            onClick={() => {
              const filterList = ResData.filter(
                (lis) => lis.info.avgRating >= 4
              );
              console.log(filterList);
              setFilteredResData(filterList);
            }}
          >
            Above 4* Rating
          </button>
        </div>
      </div>
      <div className="flex flex-wrap" >
        {filteredResData?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardPromoted resobj={restaurant} />
            ) : (
              <RestaurantCard resobj={restaurant} />
            )}

            {/* <RestaurantCard resobj={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
