import {createSlice} from '@reduxjs/toolkit';


// thia is the initial state of the app
const initialState = {
    isCartOpen: false,
    cartItems: [],
    items: [],
};

// createSlice is a function that takes an object of reducer functions, a slice name, and an initial state value and lets us auto-generate action types and action creators, based on the names of the reducer functions that we supply.

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, count: item.count + 1};
                }
                return item;
            });
        },

        decreaseCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id && item.count > 1) {
                    return {...item, count: item.count - 1};
                }
                return item;
            });
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
    

} = cartSlice.actions;
export default cartSlice.reducer; // export the reducer to be used in the store