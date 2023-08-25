import React, { Suspense, lazy, useEffect, useState }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

// const Grocery = lazy(() => import("./components/Grocery"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {

    const [userInfo,setUserInfo] = useState();

    useEffect(() => {
        const data = {
            name : "Nirali Mamaniya"
        }
        setUserInfo(data.name);
    },[]);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userInfo}}>
            <div className="app">
                {/* Header */}
                <Header/>

                {/* Body */}
                <Outlet/>

                {/* Footer */}
                <Footer/>
            </div>
        </UserContext.Provider>
        </Provider>
        
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },{
                path:"/about",
                element: <About/>
            },{
                path:"/contact",
                element: <Contact/>
            },{
                path:"/cart",
                element: <Suspense fallback={<h3>Loading...</h3>}>
                    <Cart/>
                    </Suspense>
            },{
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);