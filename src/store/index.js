import {configureStore} from '@reduxjs/toolkit';
import miscReducer from './reducers/misc';

const store = configureStore({
  reducer: {
    misc: miscReducer,
  },
});

export default store;
