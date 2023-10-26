import { configureStore } from '@reduxjs/toolkit';
import userTabReducer from '../redux/profileTabReducer/tab';
import logStateMiddleware from '../redux/logStateMiddleware';
import editProfileReducer from './editProfile/editProfileSlice';
import postLoadReducer from './postLoad/postLoadSlice';
const store = configureStore({
  reducer: {
    tab: userTabReducer,
    editProfile: editProfileReducer, 
    postLoad: postLoadReducer
  },
  middleware: [logStateMiddleware],
});

export default store;


