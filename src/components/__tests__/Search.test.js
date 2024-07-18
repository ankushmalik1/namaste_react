import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { data } from "autoprefixer";
import MOCK_DATA from "../mocks/mockResListData.json"
// import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should search Res List for burger text input", async () => {
    //render doen't happen in browser, but in JSDOM
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();

    const cardsBeforeSearch = await screen.findAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(16);

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } })
    fireEvent.click(searchBtn);
    //screen should load Res Cards containing "burger" 

    const cardsAfterSearch = await screen.findAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);


})

it("Should filter Top Rated Restaurants", async () => {
    //render doen't happen in browser, but in JSDOM
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>)

    const cardsBeforeSearch = await screen.findAllByTestId("resCard");
    console.log("Lengthh is: ", cardsBeforeSearch.length);
    expect(cardsBeforeSearch.length).toBe(16);


    const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedButton);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);

})