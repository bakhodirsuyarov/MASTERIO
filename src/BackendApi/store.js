import { configureStore } from "@reduxjs/toolkit";
import { buyurtmaDirektorApi } from './apiPages/buyurtmaDirektorApi.js'

export const store = configureStore({
  reducer: {
    [buyurtmaDirektorApi.reducerPath]: buyurtmaDirektorApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(buyurtmaDirektorApi.middleware)
});