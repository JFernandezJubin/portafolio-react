import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import registerServiceWorker from './js/services/registerServiceWorker';
import './css/main.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
