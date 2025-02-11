import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu =(resId) =>{
    const [resMenu, setResMenu] =  useState(null);

    useEffect(()=>{
        fetchData()
    },[]);

    async function fetchData(){
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResMenu(json.data)
    }

    return resMenu;
}

export default useRestaurantMenu