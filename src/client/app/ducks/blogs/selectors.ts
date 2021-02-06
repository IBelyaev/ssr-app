import { RootState } from '../../../store';

export const blogsSelector = ({ blogs }: RootState) => blogs.data;
