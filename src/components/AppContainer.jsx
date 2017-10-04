import React, {Component} from "react";
import App from "./App";
import "whatwg-fetch";

//const API_URL = 'http://kanbanapi.pro-react.com';
const API_URL = "http://localhost:3000";
const API_HEADERS = {
    "Content-Type": "application/json",
    //Authorization: "kanbankanban"
};

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        fetch(API_URL + '/cards.json', {headers: API_HEADERS}).then((response) => response.json()).then((responseData) => {
            this.setState({cards: responseData});
        }).catch((error) => {
            console.log('Błąd pobierania i przetwarzania danych.', error);
        });
    }
    render() {
        return <App cards={this.state.cards}/>
    }
}
