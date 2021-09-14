import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import modules from './modules';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(modules);
ReactDOM.render(
  <Provider store = {store}>
	<App />
	</Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
