import React, {Component} from "react";
import CheckList from "./CheckList";
import PropTypes from "prop-types";
import marked from "marked";

let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value !== "string" || value.length > 80) {
            return new Error(`Value ${propName} in ${componentName} is longer than 80 signs.`);
        }
    }
}

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
        let cardDetails,
            titleClassName;
        if (showDetails) {
            titleClassName = "card__title card__title--is-open";
            cardDetails = (
                <div className="card__details">
                    <span
                        dangerouslySetInnerHTML={{
                        __html: marked(this.props.description)
                    }}/>
                    <CheckList
                        key={this.props.id}
                        cardId={this.props.id}
                        tasks={this.props.tasks}
                        taskCallbacks={this.props.taskCallbacks}/>
                </div>
            )
        } else {
            titleClassName = "card__title";
        }
        let sideColor = {
            position: "absolute",
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };
        return (
            <div className="card">
                <div style={sideColor}/>
                <div className={titleClassName} onClick={this.toggleDetails}>{this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};
