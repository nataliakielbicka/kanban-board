import React, {Component} from "react";
import CheckList from "./CheckList";

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            showDetails: false
        }
    }
    render() {
        const {showDetails} = this.state;
        let cardDetails;
        if (showDetails) {
            cardDetails = (
                <div className="card__details">
                    {this.props.description}
                    <CheckList key={this.props.id} cardId={this.props.id} tasks={this.props.tasks}/>
                </div>
            )
        }
        return (
            <div className="card">
                <div
                    className="card__title"
                    onClick={() => this.setState({
                    showDetails: !showDetails
                })}>{this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}
