import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import { screen,render } from "@testing-library/react"

it("should render restaurandcard component with props data",()=>{
    render(<RestaurantCard resobj={MOCK_DATA}/>);
    const name = screen.getByText("Di Table 9 New")
    expect(name).toBeInTheDocument();
})