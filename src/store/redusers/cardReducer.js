import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        card: {},
    },
    reducers: {
        enlargeProduct(state, action) {
          state.card = (action.payload)
        }
    }
})

export const { enlargeProduct } = cardSlice.actions
export default cardSlice.reducer