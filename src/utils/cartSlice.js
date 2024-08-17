import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //In Vanilla Redux we were not allowe to mutate the state directly
            // instead we use to make a copy and return the new state:
            // const newState = [...state];
            //newState.items.push(action.payload);
            // return newSatte 

            //In RTK - we have to mutate the state directly - mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //We can either mutate the state or return an empty state - Immer will replace and mutate the state value behind the scenes
            //state.items.length = 0;
            console.log(current(state));
            return state = {items: []};
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;