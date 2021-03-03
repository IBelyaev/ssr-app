import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCn } from 'bem-react-classname';
import { Button } from '@alfalab/core-components/button';

import { Blog } from '../../server/blogs/models/blog.model';
import { getData, createNewBlogArticle, deleteBlogArticle } from './ducks/blogs';
import { openModal, ModalTypes, closeModal } from './ducks/modal-manager';
import { openModalTypeSelector } from './ducks/modal-manager/selectors';
import { blogsSelector } from './ducks/blogs/selectors';
import CreateArticleWindow from './ui/create-article-window';
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

    const closeModalActon = useCallback(
        () => {
            dispatch(closeModal())
        },
        []
    );

    const deleteBlogArticleAction = useCallback(
        (articleId: string) => {
            dispatch(deleteBlogArticle(articleId));
            closeModalActon();
        },
        []
    );


    const createNewBlogArticleAction = useCallback(
        (articleData: Blog) => {
            dispatch(createNewBlogArticle(articleData));
            closeModalActon();
        },
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
                        key={ someData._id }
                        id={ someData._id }
                        title={ someData.title }
                        description={ someData.description }
                        author={ someData.author }
                        date={ someData.date }
                        onDelete={ deleteBlogArticleAction }
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
                <CreateArticleWindow
                    onSubmit={createNewBlogArticleAction}
                    onClose={closeModalActon}
                />
            )}
        </div>
    )
});

export default App;
