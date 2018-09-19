import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import registerServiceWorker from './js/services/registerServiceWorker';
import './css/index.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
