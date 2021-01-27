import React, { useMemo } from 'react';
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
};

const Article = React.memo(({ title, description, author, date }: Props) => {
    const createDate = useMemo(() => new Date(date).toLocaleString('RU', dateOptions), [date]);

    return (
        <div className={cn()}>
            <div className={cn('title')}>{title}</div>
            <div className={cn('description')}>{description}</div>
            <div className={cn('button')}>
                <div className={cn('date')}>Дата создания: {createDate}</div>
                <div className={cn('author')}>Автор статьи: {author}</div>
            </div>
        </div>
    );
});

export default Article;
