import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { store } from './store.js';
import { Provider } from 'react-redux';
import './style.scss';
import 'bootstrap/dist/js/bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
// import 'bootstrap/dist/css/bootstrap.rtl.min.css';
