import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { execPath } from "process";

it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);

    const loginButton = screen.getByRole("button", { name: "Login" });
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header Component with 0 Cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);

    const cartItems = screen.getByText("Cart-(0 items)");
    // console.log("Reslt is: ", cartItems);
    expect(cartItems).toBeInTheDocument();
})

it("Should render Header Component with a Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})

it("Should change Login button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);

    const loginButton = screen.getByRole("button", { name: "Login" });
    // const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
})