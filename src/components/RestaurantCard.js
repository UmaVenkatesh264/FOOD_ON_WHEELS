import React, { useContext } from 'react'
import '../styles.css'
import { CDN_URL } from '../utils/constants';
import userContext from '../utils/userContext';

const RestaurantCard = ({restInfo}) => {
  const { name, cuisines, avgRating, costForTwo, slaString, cloudinaryImageId } = restInfo?.info;
  const centralData = useContext(userContext)
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-300 hover:border-solid hover:border-black hover:border-[1px]">
      <img
        className="rounded-lg w-full h-40"
        src={CDN_URL + cloudinaryImageId}
        alt="Subway"
      />
      <h3 className='p-2 font-bold text-md'>{name}</h3>
      <h5 className='p-2'>{cuisines.join(", ")}</h5>
      <h4 className='p-2'>{avgRating} ⭐</h4>
      <h4 className='p-2'>{costForTwo}</h4>
      <h4 className='p-2'>{slaString}</h4>
      <h4>{centralData.loggedInUser}</h4>
    </div>
  );
}


export default RestaurantCard
