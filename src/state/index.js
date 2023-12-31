// This line imports the createSlice function from the @reduxjs/toolkit library.
//  This function will be used
//  to create a Redux slice.

import {createSlice} from '@reduxjs/toolkit';





// This block defines the initial state of the app. 
// It includes three properties: isCartOpen, cartItems, and items. 
// The isCartOpen property represents whether the cart is open or closed, 
// cartItems holds an array of items in the cart, 
// and items represents all available items.
const initialState = {
    isCartOpen: false,
    cartItems: [],
    items: [],
};

 
// Here, the createSlice function is called with an object containing 
// the name of the slice (in this case, 'cart'), initialState, and an 
// empty reducers object. This function generates action types and action creators based on 
// the names of the reducer functions provided in the reducers object.

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // The setItems reducer function is called when the app first loads.
        // It receives the items from the API and sets them as the value of the items property in the state.
        setItems: (state, action) => {
            state.items = action.payload;
        },
// this addToCart reducer function is called when the user clicks the Add to Cart button.
// It receives the item that was clicked and adds it to the cartItems array in the state.
// updates what is on our cart spreads out all the items that might be on the cart and update it with the new item 
addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
// This removeFromCart reducer function is called when the user clicks the Remove button on an item in the cart.
// It receives the item that was clicked and removes it from the cartItems array in the state.
// filter out the item that we want to remove from the cart
// if the id of the item is not equal to the id of the item that we want to remove, then we want to keep it 
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
// The increaseCount reducer function is called when the user clicks the + button on an item in the cart.
// It receives the item that was clicked and increases its count property by 1.
// The decreaseCount reducer function is called when the user clicks the - button on an item in the cart.
// it finds the item that was clicked and increases its count property by 1.
        increaseCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, count: item.count + 1};
                }
                return item;
            });
        },
// the decreaseCount reducer function is called when the user clicks the - button on an item in the cart.
// it finds the item that was clicked and decreases its count property by 1.

        decreaseCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id && item.count > 1) {
                    return {...item, count: item.count - 1};
                }
                return item;
            });
        },
// this setIsCartOpen reducer function is called when the user clicks the cart icon in the header.
// It toggles the value of the isCartOpen property in the state.

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

// The following lines export the action creators generated by createSlice.
// These action creators can be used to dispatch actions to the Redux store.
// The action creators are named after the reducer functions defined in the reducers object.
export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
    

} = cartSlice.actions;
export default cartSlice.reducer; // export the reducer to be used in the store