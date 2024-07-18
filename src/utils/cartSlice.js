import { createSlice } from "@reduxjs/toolkit";

//to create a slice using createSlice({configuration})
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        // {
        //     payload: "pizza"
        // }
        // "pizza" will be passed to action.payload
        addItem: (state, action) => {
            //Vanila(older) Redux => Don't MUTATE STATE, return was MANDATORY
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // mutating the state here. RTK-we've to MUTATE the state, return is NOT mandatory. RTK uses Immer BTS
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop()
        },
        //originalState = ["pizza"]
        clearCart: (state) => {
            // console.log(state); //[pizza]
            // state = [];
            // console.log(state); // []
            // state = ["akshay"]; Not mutating the state, but just adding reference to it. It will NOT change the actual state, passed in above line #26.
            // state is a local variable with value as original state.
            //RTK - either mutate existing state OR return a new state.
            state.items.length = 0; //originalState = []
            // OR
            // return { items: [] }; this new [] will be replaced inside originalState = []
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;   //reducer is the combination of above all 3 reducers (addItem+removeItem+clearCart)