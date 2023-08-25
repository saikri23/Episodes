import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should search resList for burger text input",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>           
        )
    );
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name : "Search"});

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target : {value : "burger"}})
    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(3);
})

it("Should display all restaurants",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>           
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const allRestaurants = screen.getByRole("button",{
        name : "All",
    });
    fireEvent.click(allRestaurants);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(20);
})

it("Should filter top rated restaurants",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>           
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button",{
        name : "4.0+",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(17);
})

it("Should filter pure veg restaurants",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>           
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const pureVegRes = screen.getByRole("button",{
        name : "Pure Veg",
    });
    fireEvent.click(pureVegRes);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(3);
})

it("Should filter restaurants having cost less than 300",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>           
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const costLessThan = screen.getByRole("button",{
        name : "Less than Rs. 300",
    });
    fireEvent.click(costLessThan);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(5);
})

it("Should filter restaurants having cost high to low",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>           
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const costHighToLow = screen.getByRole("button",{
        name : "Cost: High To Low",
    });
    fireEvent.click(costHighToLow);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(20);
})

it("Should filter restaurants having cost low to high",async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>           
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const costLowToHigh = screen.getByRole("button",{
        name : "Cost: Low To High",
    });
    fireEvent.click(costLowToHigh);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(20);
})