import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

function TestComponent() {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <Cart />
        <RestaurantMenu />
      </Provider>
    </BrowserRouter>
  );
}

it("should load restaurant menu component", async () => {
  await act(async () => render(<TestComponent />));

  const accordianHeader = screen.getByText("Combos(4)");
  expect(accordianHeader).toBeInTheDocument();
});

it("should expand the accordian items", async () => {
  await act(async () => render(<TestComponent />));

  const accordianHeader = screen.getByText("Combos(4)");

  fireEvent.click(accordianHeader);
  const accordionItems = screen.getAllByTestId("FoodItems");
  expect(accordionItems.length).toBe(4);
});

it("should load cart in header", async () => {
  await act(async () => render(<TestComponent />));
  const cartInheader = screen.getByText("Cart-(0)");
  expect(cartInheader).toBeInTheDocument();

  const accordianHeader = screen.getByText("Combos(4)");

  fireEvent.click(accordianHeader);

  const addBtns = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtns[0]);

  const cartHeader1Item = screen.getByText("Cart-(1)");
  expect(cartHeader1Item).toBeInTheDocument();

  const foodItems = screen.getAllByTestId("FoodItems");
  expect(foodItems.length).toBe(5);
});

it("should close accordian on double Click",async ()=>{
    await act(async ()=>render(<TestComponent/>))

    const accordianCliclable = screen.getByText("Combos(4)")
    fireEvent.click(accordianCliclable);
    fireEvent.click(accordianCliclable);
    const addBtns = screen.getAllByRole("button", { name: "Add" });
    console.log(addBtns.length);
    expect(addBtns.length).toBe(1);

})
