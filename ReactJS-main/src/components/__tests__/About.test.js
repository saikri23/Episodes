
import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should load About component and images", () => {
    render(
        <BrowserRouter>
            <About/>
        </BrowserRouter>
    )

    const food = screen.getAllByTestId("food-image");
    expect(food[0].src).toBe("http://localhost/dummy.png");
  
})