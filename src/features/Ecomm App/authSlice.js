import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("loginUser", async (data) => {
    const responce = await axios.post("https://ecommerce-backend-mj0b.onrender.com/api/auth/login", data)

    return await responce.data
})

const token = localStorage.getItem("token")
const role = localStorage.getItem("role")

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        isAuthonticated: !!token,
        token: token ? token : null,
        role: role ? role : null,
        data: {},
        message: "",
        isError: false
    },
    reducers: {
        logout: (state) => {
            state.data = null,
                state.token = null,
                state.role = null,
                state.isAuthenticated = false

            localStorage.removeItem("token")
            localStorage.removeItem("role")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
            state.isError = false;
            state.message = "";           
            
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isAuthonticated = true,
                state.isError = false;
                state.message = action.payload.message,
                state.data = action.payload.data;
                state.role = action.payload.data.user.role
            state.token = action.payload.data.accessToken
            localStorage.setItem("token", action.payload.data.accessToken)
            localStorage.setItem("role", action.payload.data.user.role)
        })
        builder.addCase(loginUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isAuthenticated = false;
            state.message = action.payload?.message || "Login failed";
        })
    }

})

export default authSlice.reducer

