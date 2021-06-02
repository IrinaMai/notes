import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { notesReducer } from './reducer';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: notesReducer,
  middleware: [...defaultMiddleware],
});

export default store;