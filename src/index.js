import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './redux/ConfigureStore';
import App from './components/App';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.querySelector('#root'));