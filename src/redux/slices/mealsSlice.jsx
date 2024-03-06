/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items: [],
    status: null
}
export const mealsFetch = createAsyncThunk(
    //first parameter (action type)
    "meals/mealsFetch",
   async ()=>{
      const response = await axios.get("http://localhost:3000/meals/get-all");
      console.log(response.data)
      return response?.data
    }
)
const mealsSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(mealsFetch.pending, (state) => {
                state.status="pending"
            })
            .addCase(mealsFetch.fulfilled, (state, action) => {
                //action.payload == response data
                state.items = action.payload;
                state.status="fulfilled"
            })
            .addCase(mealsFetch.rejected, (state, action) => {
                state.err = true;
                state.status="rejected"
            });
    },
})

export default mealsSlice.reducer