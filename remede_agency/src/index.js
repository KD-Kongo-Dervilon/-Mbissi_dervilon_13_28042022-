import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/Router';
import store from './utils/store'
import { Provider } from 'react-redux'



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <Router tab="home" />
    </Provider>
);

