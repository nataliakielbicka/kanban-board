import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './main.css';

let cardsList = [
  {
    id: 1,
    title: "Przeczytać książkę",
    description: "Muszę przeczytać całą książkę",
    status: "in-progress",
    tasks: []
  }, {
    id: 2,
    title: "Napisać trochę kodu",
    description: "Będę przepisywać kod przykładów z książki",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "Przykład listy kontaktów",
        done: true
      }, {
        id: 2,
        name: "Przykład Kanban",
        done: false
      }, {
        id: 3,
        name: "Moje eksperymenty",
        done: false
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', function () {
  ReactDom.render(
    <App cards={cardsList}/>, document.querySelector('#root'))
});