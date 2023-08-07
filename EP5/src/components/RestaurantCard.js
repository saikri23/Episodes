import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resobj} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines
    } = resobj?.info;
  return (<div className="res-card">
    <div className="res-img">
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
        alt=""
      />
    </div>
    <h3>{name}</h3>
    <h4>{avgRating}</h4>
    <h4>{cuisines.join(", ")}</h4>
  </div>)
};

export default RestaurantCard;