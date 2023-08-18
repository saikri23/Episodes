import { CDN_URL } from "../utils/constant";

const ItemList = ({ item }) => {
  return (
    <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
      <div className="w-9/12">
        <div>
          <span className="font-bold text-lg">{item.card.info.name}</span>
        </div>
        <div>
          <span className="font-bold">₹ {item.card.info.price / 100}</span>
        </div>
        <div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      </div>
      <div className="w-3/12">
        <button className="absolute bg-black text-white rounded-lg mx-3 my-1 px-2">Add</button>
        <img src={CDN_URL + item.card.info.imageId} alt="" />
      </div>
    </div>
  );
};

export default ItemList;
