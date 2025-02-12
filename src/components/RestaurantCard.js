import React from 'react'
import '../styles.css'
import { CDN_URL } from '../utils/constants';
const RestaurantCard = ({restInfo}) => {
  const { name, cuisines, avgRating, costForTwo, slaString, cloudinaryImageId } = restInfo?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] bg-gray-200 rounded-lg hover:bg-gray-300 hover:border-solid hover:border-black hover:border-[1px]">
      <img
        className="rounded-lg w-full h-40"
        src={CDN_URL + cloudinaryImageId}
        alt="Subway"
      />
      <h3 className='p-2 font-bold text-md'>{name}</h3>
      <h5 className='p-2'>{cuisines.slice(0,2).join(", ")}</h5>
      <h4 className='p-2'>{avgRating} ⭐</h4>
      <h4 className='p-2'>{costForTwo}</h4>
      <h4 className='p-2'>{slaString}</h4>
    </div>
  );
}

export default RestaurantCard
