import React from 'react';
import ReactDom from 'react-dom';
import AppContainer from './components/AppContainer';
import './main.css';

document.addEventListener('DOMContentLoaded', function () {
    ReactDom.render(
        <AppContainer/>, document.querySelector('#root'))
});