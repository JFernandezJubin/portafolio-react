import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import registerServiceWorker from './js/services/registerServiceWorker';
import './index.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
