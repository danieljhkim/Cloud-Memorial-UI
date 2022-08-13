import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) => process.env.REACT_APP_NODE_ENV === 'development' ? 
    getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: process.env.REACT_APP_NODE_ENV === 'development',

});

export default store;