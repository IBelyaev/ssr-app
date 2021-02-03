import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../app';
import reducers from '../../client/redux/reducers';

const store = createStore(reducers);

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
