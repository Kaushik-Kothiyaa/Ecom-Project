import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/Ecomm App/authSlice' ;


export const store = configureStore({
    reducer:{
        auth : authReducer
    }
})