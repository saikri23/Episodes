import { useEffect ,useState} from "react";
import Schimmer from "./Schimmer";
import { MENU_URL } from "../utils/constant";
import {useParams} from "react-router-dom";

const RestaurantMenu=()=>{

    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams();

    useEffect(()=>{fetchMenu()},[]);
    
    const fetchMenu=async ()=>{
        const data=await fetch(MENU_URL+resId);//80107
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
 
    if(resInfo===null)return <Schimmer/>;

    return (
        
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item)=><li>{item?.card?.info?.name}- Rs.{item?.card?.info?.price/100}</li>)}   
            </ul>
        </div>
    );
}

export default RestaurantMenu;