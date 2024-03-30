/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching all meals
export const mealsFetch = createAsyncThunk(
    "meals/mealsFetch",
    async () => {
        const response = await axios.get("http://localhost:3000/meals/get-all");
        return response.data;
    }
);

// Async thunk for fetching a meal by its ID
export const fetchMealById = createAsyncThunk(
    'meals/fetchMealById',
    async (mealId) => {
        const response = await axios.get(`http://localhost:3000/meals/getItemById/${mealId}`);
        return response.data;
        console.log(response.data)
    }
);

// Initial state for meals slice
const initialState = {
    items: [],
    status: null
}

// Meals slice
const mealsSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(mealsFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(mealsFetch.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "fulfilled";
            })
            .addCase(mealsFetch.rejected, (state, action) => {
                state.status = "rejected";
            })
            .addCase(fetchMealById.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchMealById.fulfilled, (state, action) => {
                state.items = [action.payload]; // Assuming store the single meal in an array
                state.status = "fulfilled";
            })
            .addCase(fetchMealById.rejected, (state, action) => {
                state.status = "rejected";
            });
    },
});

export default mealsSlice.reducer;
