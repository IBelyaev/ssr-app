import { RootState } from '../../../store';

export const blogsSelector = (state: RootState) => state.blogs.data;
