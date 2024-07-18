const { configureStore } = require("@reduxjs/toolkit");
// import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configureStore helps to create/configure store of our app
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;