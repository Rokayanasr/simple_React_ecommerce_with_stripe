// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const mealsApi = createApi({
  reducerPath: 'mealsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/'}),
  endpoints: (builder) => ({
    getAllMeals: builder.query({
      query: () => 'meals/get-all',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMealsQuery } = mealsApi