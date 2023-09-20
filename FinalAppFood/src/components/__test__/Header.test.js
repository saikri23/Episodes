import { fireEvent, render , screen} from "@testing-library/react"
import appStore from "../../utils/appStore"
import { Provider} from "react-redux"
import Header from "../Header"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom";


it("should render the header component with login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
})

it("should render the header component with cart-(0)",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart-(0)");
    expect(cartItems).toBeInTheDocument();
})

it("should render the header component with cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})

it("should change login btn to logout btn",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
})