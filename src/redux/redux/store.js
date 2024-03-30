import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./slices/mealsSlice"
import { mealsApi } from "./slices/mealsApi"; 
import cartReducer from "./slices/cartSlice"
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer:{
        meals: mealsReducer,
        cart: cartReducer,
        auth: authReducer,
        [mealsApi.reducerPath]: mealsApi.reducer
    },
// Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
})
