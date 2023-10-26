import React, { useEffect, useState } from 'react'

const useRestaurantApi = () => {
 const[listRestauraunt,setListRestaurant]=useState([])

useEffect(()=>{
fetchData()
},[])

const fetchData=async()=>{
    const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await response.json()
    console.log(json);
setListRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
return listRestauraunt

}

export default useRestaurantApi