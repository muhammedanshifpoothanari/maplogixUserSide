import { createSlice } from '@reduxjs/toolkit';

export const userTab = createSlice({
  name: 'tab',
  initialState: {
    tab: '',
  },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { setTab } = userTab.actions;

export default userTab.reducer;