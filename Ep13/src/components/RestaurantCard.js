import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resobj } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = resobj?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-300 rounded-md hover:bg-gray-400">
      <div className="">
        <img
          className="w-[100%] h-[130px]"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
      </div>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log(props?.info?.aggregatedDiscountInfoV3?.header);
    return (
      <>
        <label className="absolute rounded-lg m-3  bg-black text-white font-bold ">{props?.resobj?.info?.aggregatedDiscountInfoV3?.header}</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
