import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterStore";
import { bookReducer } from "./reducers/bookStore";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    book: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
