import React from 'react';
import ReactDom from 'react-dom';
import ToDoListApp from './components/ToDoListApp';

const arr = [10,20,30,40,50];


ReactDom.render(<ToDoListApp arr={arr}/>, document.getElementById('root'))