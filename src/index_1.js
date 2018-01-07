import React from 'react';
import ReactDOM from 'react-dom';
import './others/index.css';
import App from './others/App';
import registerServiceWorker from './others/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
