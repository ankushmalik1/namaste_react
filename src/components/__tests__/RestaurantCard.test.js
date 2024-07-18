import { render, screen } from "@testing-library/react"
import RestaurantCard, { withOpenedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";


it("should render RestaurantCard component with props Data", async () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    // Example assertion to check if specific text is rendered
    const name = screen.getByText("Burgrill - The Win Win Burger");
    expect(name).toBeInTheDocument();
})

it("should render RestaurantCard component with Opened label", async () => {
    //test HOC : withOpenedLabel()
    const RestaurantCardWithLabel = withOpenedLabel(RestaurantCard)
    render(<RestaurantCardWithLabel resData={MOCK_DATA} />)

    // Example assertion to check if specific text is rendered
    const label = await screen.findByText("Opened"); // Use await with findByText for async operations
    expect(label).toBeInTheDocument();
})