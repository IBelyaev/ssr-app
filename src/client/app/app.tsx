import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createCn } from 'bem-react-classname';

import { add_data } from '../redux/actions/test';

import Article from './ui/article/article';

import './app.css';

const cn = createCn('app');

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.dataReducer.data);
    
    useEffect(() => {
        dispatch(add_data());
    }, []);
    
    if (!data) {
        return null;
    }

    return (
        <div className={cn()}>
            {data.map((someData: any) => {
                return (
                    <Article
                        title={someData.title}
                        description={someData.description}
                        author={someData.author}
                        date={someData.date}
                    />
                );
            })}
        </div>
    )
}

export default App;
