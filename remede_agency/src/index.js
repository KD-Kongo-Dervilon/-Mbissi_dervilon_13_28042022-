import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/Router';
import "./styles/index.scss";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router tab="home" />)

