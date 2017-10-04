import React, {Component} from "react";

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
            </div>
        );
    }
}
