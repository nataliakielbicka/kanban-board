import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CheckList extends Component {
    render() {
        let tasks = this
            .props
            .tasks
            .map((task) => (
                <li className="checklist__task" key={task.id}>
                    <input type="checkbox" defaultChecked={task.done}/> {task.name}
                    <a href="#remove" title="remove" className="checklist__task--remove">{" "}</a>
                </li>
            ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input
                    type="text"
                    className="checklist--add-task"
                    placeholder="Press enter to add sth..."/>
            </div>
        );
    }
}

CheckList.propTypes = {  
    cardId: PropTypes.number,  
    tasks: PropTypes.arrayOf(PropTypes.object) 
};
