import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Router from './router/index.js'
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
         <Router />
    </Provider>,
document.getElementById('root'));

