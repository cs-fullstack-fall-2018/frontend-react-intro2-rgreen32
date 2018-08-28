import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Netflix from './Netflix'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Netflix/>, document.getElementById('root'));
registerServiceWorker();
