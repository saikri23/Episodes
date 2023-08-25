import CategoryItems from "./CategoryItems";
import ItemsShimmer from "./ItemsShimmer";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    } 

    return  (
        <div>
            <hr className="border-gray-200 border-1"/>
            <div className="pt-4">
                <div className="flex justify-between cursor-pointer" 
                    onClick={handleClick}>
                    <span className="font-bold text-lg pb-4">{data.title} ({data.itemCards.length})</span>
                    { showItems ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg> ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>                          
                    )}
                </div>
                { showItems && <CategoryItems items = {data.itemCards}/>}
            </div>
            <hr className="border-gray-100 border-4"/>
        </div>
    )
}

export default RestaurantCategory;