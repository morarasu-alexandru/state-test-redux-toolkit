import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getBooksApi } from "../../mock";
import { RootState } from "../index";

export interface BookListState {
  list: any[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BookListState = {
  list: [],
  isLoading: false,
  error: null,
};

export const bookStore = createSlice({
  name: "book",
  initialState,
  reducers: {
    getBooksRequest: (state) => {
      state.isLoading = true;
    },
    getBooksSuccess: (state, action) => {
      state.isLoading = false;
      state.list = action.payload.newList;
    },
    getBooksFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.list = initialState.list;
    },
  },
});

const { getBooksRequest, getBooksSuccess, getBooksFailure } = bookStore.actions;

export const getBooks = (details?: { getError: boolean }) => (
  dispatch: Dispatch
) => {
  dispatch(getBooksRequest());

  getBooksApi(details?.getError)
    .then((res: any[]) => {
      dispatch(getBooksSuccess({ newList: res }));
    })
    .catch((error) => {
      dispatch(getBooksFailure({ error }));
    });
};

export const selectBooks = (state: RootState): BookListState => {
  return state.book;
};

export const bookReducer = bookStore.reducer;
