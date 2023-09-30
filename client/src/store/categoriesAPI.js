import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseURL = "http:";
export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "//localhost:3002/categories",
      }),
    }),
    getAllSubCategories: builder.query({
      query: (categoryId) => ({
        url: `//localhost:3002/categories/${categoryId}`,
      }),
    }),
  }),
});
export const { useGetAllCategoriesQuery, useGetAllSubCategoriesQuery } =
  categoriesAPI;
