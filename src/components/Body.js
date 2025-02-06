import React from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles.css";
import { restData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfResturants] = useState(restData);
  return (
    <div className="body">
      <div className="filter">
        <button className="toprated" 
        onClick={()=>{
          const filteredRestaurants = listOfRestaurants.filter((rest) => rest.info.avgRating > 4.5);
          setListOfResturants(filteredRestaurants)
        }}>
          TOP RATED RESTAURANTS
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
