import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showIndex,setShowIndex }) => {
  const { itemCards } = data;

// const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    if(showIndex)setShowIndex(false);
    else setShowIndex(true);
  };

  return (
    <div className="w-6/12 my-4 m-auto shadow-lg border-b-2 border-gray-400 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title}({data.itemCards.length})
        </span>
        <span className="">⬇️</span>
      </div>
      {showIndex &&
        itemCards.map((item_) => (
          <ItemList key={item_.card.info.id} item={item_} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
