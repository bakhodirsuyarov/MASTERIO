import { configureStore } from "@reduxjs/toolkit";
import { buyurtmaDirektorApi } from './apiPages/buyurtmaDirektorApi.js'
import { kliyentApi } from "./apiPages/kliyentApi.js";

export const store = configureStore({
  reducer: {
    [buyurtmaDirektorApi.reducerPath]: buyurtmaDirektorApi.reducer,
    [kliyentApi.reducerPath]: kliyentApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(buyurtmaDirektorApi.middleware, kliyentApi.middleware)
});