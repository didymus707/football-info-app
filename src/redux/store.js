import { configureStore } from '@reduxjs/toolkit';
import competitionsReducer from './competitions/competiitonsSlice';

const store = configureStore({
  reducer: {
    competitions: competitionsReducer,
  },
});

export default store;
