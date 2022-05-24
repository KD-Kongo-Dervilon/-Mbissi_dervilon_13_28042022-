import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/Router';
import store from './utils/store'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <CookiesProvider>
            <Router tab="home" />
        </CookiesProvider>
    </Provider>
);

