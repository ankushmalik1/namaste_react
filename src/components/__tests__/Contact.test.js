import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
import { execPath } from "process";

//describbe - for grouping multiple test cases.
describe("ContatUs Page Test Cases", () => {
    beforeAll(() => {
        console.log("Before All");
    })
    beforeEach(() => {
        console.log("Before Each");
    })
    afterAll(() => {
        console.log("After All");
    })
    afterEach(() => {
        console.log("After Each");
    })

    //test OR it (alias of test)
    test("Should load ContactUs Component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    })

    test("Should load button inside ContactUs Component", () => {
        render(<Contact />);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        //Assertion
        expect(button).toBeInTheDocument();
    })

    test("Should load input name inside ContactUs Component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("name");
        //Assertion
        expect(inputName).toBeInTheDocument();
    })

    test("Should load 2 input boxes inside ContactUs Component", () => {
        render(<Contact />);
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
        // expect(inputBoxes).toBeInTheDocument();
        inputBoxes.forEach(inputBox => {
            expect(inputBox).toBeInTheDocument();
        })
    })
})

