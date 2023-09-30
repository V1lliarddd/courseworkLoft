import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseURL = "http:";
export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    ifUserExist: builder.query({
      query: () => "//localhost:3002/checkUser",
    }),
  }),
});
export const { useIfUserExistQuery } = userAPI;
