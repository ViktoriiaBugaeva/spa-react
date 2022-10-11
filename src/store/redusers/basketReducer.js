import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
        sumProducts: 0,
        countProducts: 0,
       

    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)
            state.sumProducts = state.basket.reduce((sum, current) => {
                return sum += +current.price
            }, 0)
            state.countProducts = state.basket.length
        },

        removeProduct(state, action) {
            state.sumProducts = state.sumProducts - (state.basket.filter((item) => item.id === action.payload.id)[0].price)
            state.basket = state.basket.filter((item) => item.id !== action.payload.id);
            state.countProducts = state.basket.length
        },

    
    }
})

export const { addProduct, removeProduct } = basketSlice.actions
export default basketSlice.reducer