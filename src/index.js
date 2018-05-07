import React from 'react';
import { render } from 'react-dom';
import Main from './main';
import './assets/styles/global.css';

let rootElement = document.getElementById('root');

if(rootElement) {
    render(
        <Main />,
        document.getElementById('root')
    );
}
