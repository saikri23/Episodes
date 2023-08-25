import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";
import App from "../../App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should search Res List for table text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsB4Search = screen.getAllByTestId("resCard");

  expect(cardsB4Search.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "table" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("should filter Top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsB4Filter = screen.getAllByTestId("resCard");

  expect(cardsB4Filter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", { name: "Above 4* Rating" });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(7);
});

it("should render two input fields ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
          <Header />
          <UserContext />
          <App />
        </Provider>
      </BrowserRouter>
    )
  );
  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);

  // const userInput = screen.getByTestId("userInput");

  // fireEvent.change(userInput, { target: { value: "krishna" } });

  // const username = screen.getByTestId("userName");

  // expect(username).toBeInTheDocument();
});
