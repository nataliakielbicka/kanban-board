import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './main.css';

document
  .addEventListener('DOMContentLoaded', function () {
    ReactDom.render(
      <App />, document.querySelector('#root'))
  });