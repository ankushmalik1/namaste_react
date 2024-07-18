import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
// import { act } from 'react';
import Header from "../Header";
import Cart from "../Cart";

// global.fetch = jest.fn(() => {
//     Promise.resolve({
//         json: () => Promise.resolve(MOCK_DATA_NAME)
//     })
// });
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        }
    })
});

// Clear mocks after each test to avoid interference
// afterEach(() => {
//     jest.clearAllMocks();
// });

it("Should Load Restaurant Menu Component", async () => {
    // console.log("Mock Data is: ", MOCK_DATA_NAME);
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    );

    const accordionHeader = await screen.findByText("AMBARSARI TAWA SPECIAL (21)");
    expect(accordionHeader).toBeInTheDocument();
    fireEvent.click(accordionHeader);

    // Wait for food items to appear after clicking the accordion header
    // expect(screen.findAllByTestId("foodItems").length).toBe(21);
    const foodItems = await screen.findAllByTestId("foodItems");
    expect(foodItems.length).toBe(21);

    // Click on 'Add +' button to simulate adding an item to the cart
    const addBtns = await screen.findAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    // Assert that cart count is updated after adding an item
    // expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();
    const updatedCart = await screen.findByText("Cart-(1 items)");
    expect(updatedCart).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    const anotherUpdatedCart = await screen.findByText("Cart-(2 items)");
    expect(anotherUpdatedCart).toBeInTheDocument();

    const foodItemsNew = await screen.findAllByTestId("foodItems");
    expect(foodItemsNew.length).toBe(23);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getAllByTestId("foodItems").length).toBe(21);

    expect(
        await screen.findByText("Cart is empty. Please add items to Cart!")
    ).toBeInTheDocument();

})