import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCn } from 'bem-react-classname';
import { Button } from '@alfalab/core-components/button';

import { getData } from './ducks/blogs';
import { openModal, ModalTypes } from './ducks/modal-manager';
import { openModalTypeSelector } from './ducks/modal-manager/selectors';
import { blogsSelector } from './ducks/blogs/selectors';
import ModalWindow from './ui/modal-window';
import Article from './ui/article/article';

import './app.css';

const cn = createCn('app');

const App = React.memo(() => {
    const dispatch = useDispatch();
    const blogs = useSelector(blogsSelector);
    const openModalType = useSelector(openModalTypeSelector);

    const openModalActon = useCallback(
        () => dispatch(openModal(ModalTypes.createBlogModal)),
        []
    );

    useEffect(() => {
        dispatch(getData());
    }, []);
    
    if (!blogs) {
        return null;
    }

    return (
        <div className={ cn() }>
            {blogs.map((someData) => {
                return (
                    <Article
                        key={ someData.title }
                        title={ someData.title }
                        description={ someData.description }
                        author={ someData.author }
                        date={ someData.date }
                    />
                );
            })}
            <Button
                className={ cn('add-btn') }
                view='primary'
                block={ true }
                onClick={ openModalActon }
            >
                Добавить новую статью
            </Button>
            { openModalType && (
                <ModalWindow>
                    Какая то инфа
                </ModalWindow>
            )}
        </div>
    )
});

export default App;
