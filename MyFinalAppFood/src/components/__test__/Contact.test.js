import "@testing-library/jest-dom";
import {screen,render} from "@testing-library/react"
import Contact from "../Contact";
import React from "react";

test("should load contact us component",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("should load button inside contact component",()=>{
    render(<Contact/>);
    const button=screen.getByText("Submit")

    expect(button).toBeInTheDocument();
});

it("should load 2 input boxes",()=>{
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
})