import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';

import blogsReducer from '../app/ducks/blogs';

const rootReducer = combineReducers({
    blogs: blogsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export default store;
