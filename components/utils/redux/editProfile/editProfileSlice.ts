import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  name: '',
  mobileNumber: '',
  adhaar: '',
  address: '',
  userType: '',
  image: '',
  error: false,
  compleate: false,
};

// Create a slice for the edit profile state
const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
    setAdhaar: (state, action) => {
      state.adhaar = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setuserType: (state, action) => {
      state.userType = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setCompleate: (state, action) => {
      state.compleate = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setName, setMobileNumber, setAdhaar, setAddress, setuserType, setImage, setCompleate, setError } = editProfileSlice.actions;
export default editProfileSlice.reducer;
