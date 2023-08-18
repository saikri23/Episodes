import Schimmer from "./Schimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  // const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  if (resInfo === null) return <Schimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-3">{name}</h1>
      <p className="font-bold text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showIndex={index===showIndex?true:false}
          setShowIndex={(x)=>{x?setShowIndex(index):setShowIndex(false)}}
        /> 
      ))}
    </div>
  );
};

export default RestaurantMenu;
