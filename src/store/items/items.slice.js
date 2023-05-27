import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  startDelete: false,
  startAdd: false
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state) => {
      state.items.unshift(state.length + 1);
    },
    deleteItem: (state) => {
      state.items.pop();
    },
    setStartDelete: (state, {payload}) => {
      state.startDelete = payload;
    },
    setStartAdd: (state, {payload}) => {
      state.startAdd = payload;
    }
  }
})

export const {actions, reducer} = itemsSlice;