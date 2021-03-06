import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker'
//------------------------------------
import modules from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(modules, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
	<Provider store = {store}>
	<App />
	</Provider>,
	document.getElementById('root')
);