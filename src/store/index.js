import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./slices";

export const index = configureStore({
  reducer: rootReducer,
});
