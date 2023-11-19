import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'
import {Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </Provider>
  //</React.StrictMode>
);
