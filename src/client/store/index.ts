import { combineReducers, createStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import blogsReducer from '../app/ducks/blogs';

type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
    blogs: blogsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
