import React from 'react'
import { CDN_URL } from '../../utilis/constants';
import "./Card.css"
const Card = (props) => {
 
    const{listObj}=props;
    const{cloudinaryImageId,name,cuisines,avgRating}=listObj.info
  return (
    <div className='cards-container'>
        
    <img className='restcards-img' src={CDN_URL +cloudinaryImageId} alt='food-img' />
       
            <div className='cards'>

            <h3>{name}</h3>
            <p className='cuisines'> {cuisines.slice(0,3).join(',')}</p>
            <p>Star {avgRating}</p>

            </div>
    </div>
  )
}

export default Card