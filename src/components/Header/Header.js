import React, { useState } from "react";
// import { LOGO_URL } from "../../utilis/constants";
import food from "../../utilis/assets/food-icon.png"
import { Link } from "react-router-dom";
import "./Header.css"
import useOnlineStatus from "../../utilis/useOnlineStatus";
const Header=()=>{
const[btnChange,setBtnChange]=useState('Login')
const online=useOnlineStatus()
console.log("Header called");

    return(
<nav>
    <div className="nav-left">
        <Link to="/">
<img src={food} className="nav-logo" alt="logo"/>
</Link>
    </div>
    <div className="nav-right">
<ul ><li> {online?(<p className="greenclr"></p>):(<p className="redcolor"></p>)}
 
    </li>
    <li><Link to="/about"> Aboutus</Link></li>
   <li><Link to="/contact" >Contact</Link></li> 
    <li><Link to="/reviews">Reviews</Link></li>
    <li>Cart</li>
    
    <button className="login-btn"
    onClick={()=>{btnChange==='Login'?setBtnChange("Logout"):setBtnChange("Login")}}
    >{btnChange}</button>
</ul>
</div>
</nav>
    )
}

export default Header;