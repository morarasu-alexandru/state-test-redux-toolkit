import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterStore = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterStore.actions;

export const selectCounterValue = (state: RootState) => state.counter.value;

export const counterReducer = counterStore.reducer;
