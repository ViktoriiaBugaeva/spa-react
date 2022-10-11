import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './redusers/basketReducer';
import cardReducer from './redusers/cardReducer'

export default configureStore ({
    reducer: {
        basket: basketReducer,
        card: cardReducer
    }
})