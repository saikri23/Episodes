import { CAROUSEL_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Carousel = ({items}) => {
    
    // const {items} = props;
    const cardsData = items;
    // console.log(cardsData);
    // const carouselId = ['pneknawbadtvceqzwiep','zpkkdkmvlj5cuvqbc50t','s5ug2key6e2sptaxku5v','ifi2lbzxeu1hvsqrsip3'];
    return (
        <div className="mx-24">
            <h1 className="mt-5 text-2xl font-bold">Best offers for you</h1>
            <div className="grid grid-flow-col scroll-auto gap-7 overflow-x-auto overscroll-x-contain snap-x no-scrollbar m-4 py-3 px-3">
                {cardsData.map((card) => (
                    <Link 
                        key={card?.id} 
                        to="/"
                    >     
                        <img 
                            className="max-w-md snap-start transition-transform duration-500 ease-linear transform-gpu hover:scale-105" 
                            src={CAROUSEL_CDN_URL+card?.imageId}></img> 
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Carousel;