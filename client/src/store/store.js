import { configureStore } from "@reduxjs/toolkit";
import { categoriesAPI } from "./categoriesAPI";
import { userAPI } from "./userAPI";

export const store = configureStore({
  reducer: {
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesAPI.middleware)
      .concat(userAPI.middleware),
});
