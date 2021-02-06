import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const mock_data = [
    {
        title: 'Что-то новое',
        description: 'Супер новость.Супер новость.Супер новость.Супер новость.Супер новость.',
        author: 'Tom',
        date: 1611584012964
    }, {
        title: 'Что-то новое',
        description: 'Супер новость.Супер новость.Супер новость.Супер новость.Супер новость.',
        author: 'Tom',
        date: 1611584012964
    }, {
        title: 'Что-то новое',
        description: 'Супер новость.Супер новость.Супер новость.Супер новость.Супер новость.',
        author: 'Tom',
        date: 1611584012964
    }, {
        title: 'Что-то новое',
        description: 'Супер новость.Супер новость.Супер новость.Супер новость.Супер новость.',
        author: 'Tom',
        date: 1611584012964
    },
]

const blogsSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        // getData: (state, action: PayloadAction<BlogInfo>) => {
        //     state.data = action.payload
        // }

        getData: (state) => {
            state.data = mock_data;
        }
    },
});

export default blogsSlice;
