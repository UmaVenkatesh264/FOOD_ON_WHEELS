import React from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles.css";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_CARDS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
 // console.log("Body Rendered");
  
  const [listOfRestaurants, setListOfResturants] = useState([]);
  const [listOfRestaurantsDuplicate, setListOfResturantsDuplicate] =
    useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    //console.log("UE called");
    fetchData();
  },[])
  const fetchData = async () =>{
    const data = await fetch(RESTAURANT_CARDS_API)
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //console.log(restaurantList);
      
    setListOfResturants(restaurantList)
    setListOfResturantsDuplicate(restaurantList)
  }

  const { loggedInUser, setUserName} = useContext(userContext);

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>Looks like you're offline, please check your internet connection</h1>
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-center">
        <div className="p-4">
        <input
          className="border-solid border-2 border-black p-1.5 rounded-lg"
          type="text"
          value={searchText}
          onChange={(event) => {
          setSearchText(event.target.value);
          }}
        />
          <button
            className="px-4 py-2 m-4 bg-blue-400 rounded-lg"
            onClick={() => {
              const searchedRestaurants = listOfRestaurantsDuplicate.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setListOfResturants(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4">
        <button
          className="px-4 py-2 bg-green-400 rounded-lg"
          onClick={() => {
            const topRatedRestaurants = listOfRestaurants.filter(
              (rest) => rest.info.avgRating >= 4.5
            );
            setListOfResturants(topRatedRestaurants);
          }}
        >
          TOP RATED RESTAURANTS
        </button>
        </div>
        <div className="p-4">
          <label>USER NAME : </label>
          <input className="border-black border-2 p-2"
          value = {loggedInUser}
          onChange={(e)=>{
            setUserName(e.target.value);
          }}/>
        </div>
      </div>

      <div className="flex flex-wrap justify-start gap-6">
        {listOfRestaurants.map((restaurant) => (
          <Link className="card-links" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard restInfo={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
