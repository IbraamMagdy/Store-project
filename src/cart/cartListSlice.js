import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
            state.totalPrice += action.payload.price*action.payload.quantity;
            },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === itemId);
            if(itemIndex !== -1) {
                const product = state.cartItems[itemIndex];
                state.totalPrice -= product.price*product.quantity;
                state.cartItems.splice(itemIndex, 1);
            }
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

