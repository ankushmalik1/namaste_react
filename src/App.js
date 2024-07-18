// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// console.log(heaading);  //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//React.createElement => React Element-JS Object => HTMLElement/DOM Node (render to DOM)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
//JSX => Bable transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">Namaste React using JSX</h1>)

// const Title = () => {
//     return (<h1>
//         Title Component - Namaste React using JSX
//     </h1>)
// }

// Component Composition
// const HeadingComponent = () => {
//     return (
//         <div id="container">
//             <Title />       {/*for passing props*/}
//             {Title()}
//             <Title></Title> {/*for passing children props*/}
//             <h1 className="heading">Namaste React Functional Component</h1>
//         </div>)
// }

//not using keys (not acceptable) <<<< index as key <<<< unique id(best practice)

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    //authentication
    useEffect(() => {
        //Make an API call and send username and password
        const data = {
            name: "Akshay Saini"
        }
        setUserName(data.name);
    }, [])
    return (
        <Provider store={appStore}>
            {/* Default Value */}
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> {/*We override the old value of loggedInUser*/}
                <div>
                    {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
                    {/* Elon Musk */}
                    <Header />
                    {/* </UserContext.Provider> */}
                    {/* if path = / */}
                    {/* <Body /> */}
                    {/* if path = /about */}
                    {/* <About /> */}
                    {/* if path = /contact */}
                    {/* <Contact /> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
    // {
    //     path: "/about",
    //     element: <About />
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />
    // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);