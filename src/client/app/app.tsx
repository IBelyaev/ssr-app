import React from 'react';
import { createCn } from 'bem-react-classname';

import Article from './ui/article/article';

import './app.css';

const cn = createCn('app');

export default class App extends React.PureComponent {
    render() {
        return (
            <div className={cn()}>
                <Article
                    title='Что-то новое'
                    description='Супер новость.Супер новость.Супер новость.Супер новость.Супер новость.'
                    author='Tom'
                    date={1611584012964}
                />
                <Article
                    title='Что-то новое'
                    description='Супер новость.Супер новость.Супер новость.Супер новость.Супер новость.'
                    author='Tom'
                    date={1611584012964}
                />
                <Article
                    title='Что-то новое'
                    description='Супер новость.Супер новость.Супер новость.Супер новость.Супер новость.'
                    author='Tom'
                    date={1611584012964}
                />
            </div>
        )
    }
}
