import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCn } from 'bem-react-classname';

import { getData } from './ducks/blogs';
import { openModal, ModalTypes } from './ducks/modal-manager';
import { blogsSelector } from './ducks/blogs/selectors';

import Article from './ui/article/article';

import './app.css';

const cn = createCn('app');

const App = React.memo(() => {
    const dispatch = useDispatch();
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
            <button onClick={ () => dispatch(openModal(ModalTypes.createBlogModal)) }>
                Добавить новую статью
            </button>
        </div>
    )
});

export default App;
