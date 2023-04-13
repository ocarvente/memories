import React from 'react';
import {Provider} from 'react-redux';
import { createRoot } from 'react-dom/client';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';  
import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);