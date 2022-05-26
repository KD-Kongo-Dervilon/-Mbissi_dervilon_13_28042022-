import { configureStore } from '@reduxjs/toolkit'
import userIdReducer from './slices/userIdSlices';

export default configureStore({
    reducer: {
        user: userIdReducer,
    }
})