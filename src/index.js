import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

/*String.prototype.firstLetterToUppercase = function () {
  return this[0].toUpperCase() + this.slice(1);
};*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
