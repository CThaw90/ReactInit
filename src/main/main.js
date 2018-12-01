import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

let appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<App title={'Hello World!'} />, appContainer);
