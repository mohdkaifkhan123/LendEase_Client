import authReducer from "../redux/authSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

 const store=configureStore({
    reducer:{
        auth:authReducer
    }
})
export default store