import React, { useState,useEffect } from 'react'
import "./Body.css"
// import { resList } from '../../utilis/mockData'
import Card from '../Card/Card'
import Shimmer from '../Shimmer/Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utilis/useOnlineStatus'

const Body = () => {
  const[listRestaurant,setListRestaurant]=useState([])
  const[filterRestaurant,setFilterRestaurant]=useState([])
  const[searchText,setSearchText]=useState("")
  const online =useOnlineStatus()
console.log("body called");

// const filterRestaurant=useRestaurantApi()


useEffect(()=>{
  fetchApi();
console.log("UseEffect called")
},[])

const fetchApi=async()=>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  console.log(json);
 
  setListRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
}

if(online===false)return<h1>Looks like You are Offline!!!</h1>

  return listRestaurant.length===0?<Shimmer/> : (
    <div className='body-container'>
<div className='filter'>
<div className='search-bar'>
<input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
<button className='search-btn' onClick={()=>{
  const searchFilter=listRestaurant.filter((filterRes)=> filterRes.info.name.toLowerCase().includes(searchText.toLowerCase().trim()))
 setFilterRestaurant(searchFilter)
 
} }>Search</button>
</div>



<button className='filter-btn' onClick={()=>{
  const filterRest=listRestaurant.filter((listItems)=>listItems.info.avgRating>4)
  setFilterRestaurant(filterRest)
} }

>Top Rated Restaurant</button>
</div>

<div className='foodCard-info'>
{
 listRestaurant.map((restaurant)=>(
  <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
<Card listObj={restaurant} />
</Link>
  ))
}
</div>
    </div>
  )
}

export default Body;