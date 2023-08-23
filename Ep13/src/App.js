import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
//import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

const Grocery = lazy(() => import("./components/Grocery"));

//Authenication

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //we make a api call for user Info
    const data = {
      name: "sai",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div>
      <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:(
          <Cart/>
        )
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
