import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    loadName: '',
    startPoint: '',
    expectedPrice: '',
    destination: '',
    loadType: '',
    wareHouseType: '',
    truckType: '',
  error: false,
  PostCompleate: false,
};

// Create a slice for the edit profile state
const postLoadSlice = createSlice({
    name: 'postLoad',
  initialState,
  reducers: {
    setloadName: (state, action) => {
      state.loadName = action.payload;
    },
    setstartPoint: (state, action) => {
      state.startPoint = action.payload;
    },
    setexpectedPrice: (state, action) => {
      state.expectedPrice = action.payload;
    },
    setdestination: (state, action) => {
      state.destination = action.payload;
    },
    setloadType: (state, action) => {
      state.loadType = action.payload;
    },
    setwareHouseType: (state, action) => {
      state.wareHouseType = action.payload;
    },
    setweight: (state, action) => {
      state.weight = action.payload;
    },
    settruckType: (state, action) => {
        state.truckType = action.payload;
      },
    setPostCompleate: (state, action) => {
      state.PostCompleate = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setloadName, setstartPoint, setexpectedPrice, setdestination, setloadType, setwareHouseType, settruckType, setPostCompleate, setError, setweight} = postLoadSlice.actions;
export default postLoadSlice.reducer;
