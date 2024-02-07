import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addBtn: true,
  check: false,
  checked: false,
};

export const stateSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    addBtn: (state, action) => {
      action.payload ? (state.addBtn = true) : (state.addBtn = false);
    },
    check: (state, action) => {
      state.check = action.payload;
    },
    checked: (state, action) => {
      state.checked = action.payload;
    },
  },
});

export const { addBtn, check, now } = stateSlice.actions;

export default stateSlice.reducer;
