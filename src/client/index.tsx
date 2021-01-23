import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('react-container')
)

if (typeof(module.hot) !== 'undefined') {
    module.hot.accept();
}
