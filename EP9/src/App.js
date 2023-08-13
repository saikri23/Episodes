import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
//import Grocery from "./components/Grocery";
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => (
  <div>
    <Header />
    <Outlet/>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense><Grocery/></Suspense>
      }
    ],
    errorElement:<Error/>
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
