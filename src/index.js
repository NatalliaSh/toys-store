import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { initFireBase } from './firebase';

String.prototype.firstLetterToUppercase = function () {
  return this[0].toUpperCase() + this.slice(1);
};

initFireBase();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
