// renderuje nas js file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {usersData} from "./data/users"

ReactDOM.render(<App data={usersData} />, document.getElementById('root'));
registerServiceWorker();
