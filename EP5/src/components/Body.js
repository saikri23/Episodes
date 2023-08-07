import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
const [ResData,setResData]= useState(ResList);
return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter-btn">
        <button className="rating-btn" onClick={()=>{
            const filterList=ResList.filter((lis)=>lis.info.avgRating>=4);
            setResData(filterList);

        }}>Above 4* Rating</button>
      </div>
      <div className="res-container">
        {ResData.map(restaurant=><RestaurantCard key={restaurant.info.id} resobj={restaurant}/>)}
      </div>
    </div>
  )};

  export default Body;