import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";

import axios from "axios";
export const registration = createAsyncThunk("registration", async (data) => {
  console.log("dataaa", data);
  const response = await axios.post("http://localhost:8080/register", data);
  return response;
});

export const login = createAsyncThunk("login", async (data) => {
  const response = await axios.post("http://localhost:8080/login", data);
  console.log("ressssss", response.data);
  return response;
});
const initialState = {
  fulfilled: false,
  login:""
};
export const auth = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state) => {
      state.fulfilled = true;
    })
    .addCase(login.fulfilled, (state,action) => {
      state.fulfilled = true;
      state.login=action.payload
    });
  },
});

export default auth.reducer;
