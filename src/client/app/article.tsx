import React from 'react';
import { createCn } from 'bem-react-classname';

import './article.css';

const cn = createCn('article');

const Article = React.memo(() =>(
    <div className={cn()}>
        какая-то статья
        {' '}
        <span className={cn('text')}>проверка postcss</span>
    </div>
));

export default Article;
