import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const params = useParams();
    const {resId} = params
    //console.log(params);
    
    //custom hooks
    const resMenu = useRestaurantMenu(resId);

    if (resMenu === null) return <Shimmer />;

    const { name, cuisines = [], costForTwoMessage } = resMenu?.cards?.[2]?.card?.card?.info || {};
    const itemCards = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    //console.log(itemCards);

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h4>{costForTwoMessage}</h4>
            <h3>Menu Items:</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}> 
                    {item.card.info.name}{" - "}{"Rs."}{(item.card.info.price)/100 || (item.card.info.defaultPrice)/100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
