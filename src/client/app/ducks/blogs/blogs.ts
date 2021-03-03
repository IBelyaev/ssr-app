import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Blog } from '../../../../server/blogs/models/blog.model';

type BlogInfo = {
    title: string;
    description: string;
    author: string;
    date: number;
    _id: string;
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

export const createNewBlogArticle = createAsyncThunk<BlogInfo[], Blog>(
    'blogSlice/createBlogArticle',
    async (articleData) => {
        await axios.post('http://localhost:8000/blog', articleData);
        
        const response = await axios.get('http://localhost:8000/blogs');

        return response.data;
    }
);

export const deleteBlogArticle = createAsyncThunk<BlogInfo[], string>(
    'blogSlice/deleteBlogArticle',
    async (id) => {
        await axios.delete(`http://localhost:8000/blog/${id}`);
        
        const response = await axios.get('http://localhost:8000/blogs');

        return response.data;
    }
);

const blogsSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getData.fulfilled, (state, { payload }) => {
                state.data = payload
            })
            .addCase(createNewBlogArticle.fulfilled, (state, { payload }) => {
                state.data = payload
            })
            .addCase(deleteBlogArticle.fulfilled, (state, { payload }) => {
                state.data = payload
            })
    }
});

export default blogsSlice;
