import React from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_CARDS_API } from "../utils/constants";
import { Link } from "react-router-dom";

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
    const data = await fetch("https://thingproxy.freeboard.io/fetch/" + RESTAURANT_CARDS_API)
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //console.log(restaurantList);
      
    setListOfResturants(restaurantList)
    setListOfResturantsDuplicate(restaurantList)
  }
  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <button
            className="searchbtn"
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
        <button
          className="toprated"
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
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <Link class="card-links" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard restInfo={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
