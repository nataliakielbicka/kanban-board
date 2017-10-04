import React, {Component} from "react";
import List from "./views/List";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <List
          id="todo"
          title="To do"
          cards={this
          .props
          .cards
          .filter(card => card.status === "todo")}/>
        <List
          id="in-progress"
          title="In progress"
          cards={this
          .props
          .cards
          .filter(card => card.status === "in-progress")}/>
        <List
          id="done"
          title="Done"
          cards={this
          .props
          .cards
          .filter(card => card.status === "done")}/>
      </div>
    )
  }
}
