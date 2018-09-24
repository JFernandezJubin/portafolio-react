import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import registerServiceWorker from './js/services/registerServiceWorker';
import Data from './data/data';
import './index.css';

ReactDOM.render(<Main data={Data}/>, document.getElementById('root'));
registerServiceWorker();
