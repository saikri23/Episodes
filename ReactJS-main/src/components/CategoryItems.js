import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const CategoryItems = ({items}) => {

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            {
                items.map((item) => (
                    <>
                    <div 
                        data-testid="foodItems"
                        key={item.card.info.id} className="flex justify-between pt-4 pb-5 gap-3">
                        <div className="w-9/12">
                            <p className="font-medium text-lg">{item.card.info.name}</p>
                            <p className="font-medium text-sm ">₹ {item.card.info.price/100}</p>
                            <p className="pt-3 text-sm text-gray-400">{item.card.info.description}</p>
                        </div>
                        <div className="w-1/5 relative"> 
                            <div className="absolute flex justify-center w-11/12">
                                <button 
                                    className="absolute mt-16 py-[6px] px-6 text-sm bg-white text-green-400 rounded border border-solid border-gray-400"
                                    onClick={()=> addFoodItem(item)}>
                                    ADD +
                                </button>
                            </div>   
                            <img src={CDN_URL + item.card.info.imageId} className="w-11/12 rounded-lg"></img>  
                        </div>
                    </div>
                    <hr className="border-gray-200 border-1"/>
                    </>
                ))
            }
        </div>
    )
}

export default CategoryItems;