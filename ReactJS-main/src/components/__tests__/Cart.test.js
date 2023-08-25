import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA)
    })
)

it("Should contain accordion with heading Shravan Special(4)", async () => {
    await act(async() => render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Shravan Special (4)")
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(4);
})

it("Should contain add buttons for food items", async () => {
    await act(async() => render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ));

    const addBtns = screen.getAllByRole("button", {name : "ADD +"})
    fireEvent.click(addBtns[0]);
    
})

it("Should have at least 1 cart item after adding a food item to the cart", async () => {
    await act(async() => render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ));

    expect(screen.getByText("Cart - 1 items")).toBeInTheDocument();
})

it("Should contain clear cart button", async () => {
    await act(async() => render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ));
    const clearCartBtn = screen.getByRole("button", {name : "Clear cart"})
    expect(clearCartBtn).toBeInTheDocument();
    fireEvent.click(clearCartBtn);
    expect(screen.getByText("Cart - 0 items")).toBeInTheDocument();
})

