import React, { useState } from 'react'

const useOnlineStatus = () => {
  const[onlineStatus,setOnlineStatus]=useState(true)

window.addEventListener("online",function(){
setOnlineStatus(true)
})

window.addEventListener("offline",function(){
    setOnlineStatus(false)
})
    return onlineStatus
}

export default useOnlineStatus