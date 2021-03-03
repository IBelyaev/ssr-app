import React, { useMemo, useCallback } from 'react';
import { createCn } from 'bem-react-classname';

import './article.css';

const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const cn = createCn('article');

type Props = {
    date: number;
    title: string;
    description: string;
    author: string;
    onDelete: (id: string) => void;
    id: string;
};

const Article = React.memo(({ title, description, author, date, id, onDelete }: Props) => {
    const createDate = useMemo(() => new Date(date).toLocaleString('RU', dateOptions), [date]);
    const onDeleteMemorize = useCallback(() => onDelete(id), [onDelete, id]);

    return (
        <div className={cn()}>
            <div>
                <div className={cn('title')}>{title}</div>
                <div onClick={onDeleteMemorize} className={cn('close-btn')}>x</div>
            </div>
            <div className={cn('description')}>{description}</div>
            <div className={cn('button')}>
                <div className={cn('date')}>Дата создания: {createDate}</div>
                <div className={cn('author')}>Автор статьи: {author}</div>
            </div>
        </div>
    );
});

export default Article;
