import React from 'react'
import '../styles.css'
import { CDN_URL } from '../utils/constants';
const RestaurantCard = ({restInfo}) => {
  const { name, cuisines, avgRating, costForTwo, slaString, cloudinaryImageId } = restInfo?.info;
  return (
    <div className="rest-card">
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="Subway"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
}

export default RestaurantCard
