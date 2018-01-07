import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const arr = [1,2,3,4,5,6,7,8,9,0];


ReactDom.render(<App arr={arr}/>, document.getElementById('root'))