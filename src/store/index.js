import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const index = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
