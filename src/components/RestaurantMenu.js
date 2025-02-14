import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const params = useParams();
    const {resId} = params
    //console.log(params);

    const [showIndex, setShowIndex] = useState(null);
    
    //custom hooks
    const resMenu = useRestaurantMenu(resId);

    if (resMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resMenu?.cards?.[2]?.card?.card?.info;
    const itemCards = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

    //console.log(resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = (resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((c)=>(c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

    const handleCategoryClick = (index) => {
        if (showIndex === index) {
          setShowIndex(null);
        } else {
          setShowIndex(index); 
        }
      };

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-4xl">{name}</h1>
            <p className="font-bold text-md">{cuisines.join(", ")}</p>
            <h5 className="font-bold text-md my-4">{costForTwoMessage}</h5>
            {
                categories.map((category, index)=>(
                    <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems = {index === showIndex ? true : false}
                    setShowIndex={() => handleCategoryClick(index)}
                    />
                ))
            }
        </div>
    );
};

export default RestaurantMenu;
