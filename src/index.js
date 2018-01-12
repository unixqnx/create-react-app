import React from 'react';
import ReactDom from 'react-dom';
import ToDoListApp from './components/ToDoListApp';

import store from './store';
import { Provider } from 'react-redux';

import './css/main.css';

// const arr = ['10','20','30','40','50'];
// ReactDom.render(<ToDoListApp arr={arr}/>, document.getElementById('root'))

ReactDom.render(<Provider store={store}>
                    <ToDoListApp/>
                </Provider>, document.getElementById('root'));