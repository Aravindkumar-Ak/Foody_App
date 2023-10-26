
import  ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header"
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css"
import Contactus from "./src/components/Contactus";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Review from "./src/Review";
import RestaurantMenu from "./src/components/RestaurantMenu/RestaurantMenu";
const App=()=>(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            }
            ,{
                path:"/contact",
                element:<Contactus/>
            },{
                path:"/about",
                element:<About/>
            },{
                path:"/reviews",
                element:<Review/>
            },{
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)