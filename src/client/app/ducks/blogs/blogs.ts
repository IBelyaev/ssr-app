import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type BlogInfo = {
    title: string;
    description: string;
    author: string;
    date: number;
};

type BlogSlice = {
    data: BlogInfo[] | null;
};

const initialState: BlogSlice = {
    data: null
};

export const getData = createAsyncThunk<BlogInfo[]>(
    'blogSlice/getData',
    async () => {
        const response = await axios.get('http://localhost:8000/blogs');

        return response.data;
    }
);

const blogsSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getData.fulfilled, (state, { payload }) => {
            state.data = payload
          })
      }
});

export default blogsSlice;
