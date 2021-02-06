import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { createCn } from 'bem-react-classname';

import { useAppDispatch } from '../store';
import { getData } from './ducks/blogs';
import { blogsSelector } from './ducks/blogs/selectors';

import Article from './ui/article/article';

import './app.css';

const cn = createCn('app');

const App = React.memo(() => {
    const dispatch = useAppDispatch();
    const blogs = useSelector(blogsSelector);
    
    useEffect(() => {
        dispatch(getData());
    }, []);
    
    if (!blogs) {
        return null;
    }

    return (
        <div className={cn()}>
            {blogs.map((someData) => {
                return (
                    <Article
                        key={someData.title}
                        title={someData.title}
                        description={someData.description}
                        author={someData.author}
                        date={someData.date}
                    />
                );
            })}
        </div>
    )
});

export default App;
