import React, {Component} from "react";
import CheckList from "./CheckList";

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            showDetails: false
        }
        this.toggleDetails = this
            .toggleDetails
            .bind(this);
    }
    toggleDetails = () => {
        const {showDetails} = this.state;
        this.setState({
            showDetails: !showDetails
        })
    }
    render() {
        const {showDetails} = this.state;
        let cardDetails, titleClassName;
        if (showDetails) {
            titleClassName = "card__title card__title--is-open";
            cardDetails = (
                <div className="card__details">
                    {this.props.description}
                    <CheckList key={this.props.id} cardId={this.props.id} tasks={this.props.tasks}/>
                </div>
            )
        }
        else {
            titleClassName = "card__title";
        }
        return (
            <div className="card">
                <div className={titleClassName} onClick={this.toggleDetails}>{this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}