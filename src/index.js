import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './pages/Main';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

injectTapEventPlugin();
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
