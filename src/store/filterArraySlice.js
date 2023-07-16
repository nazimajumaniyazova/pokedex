import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterArray: [],
};

const filterArraySlice = createSlice({
  name: 'filterArray',
  initialState,
  reducers: {
    setFilterArray(state, action) {
      state.filterArray = action.payload;
    },
  },
});
export const { setFilterArray } = filterArraySlice.actions;
export const filterArray = filterArraySlice.reducer;
