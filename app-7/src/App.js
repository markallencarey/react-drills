//MY SOLUTION:
// import React, { Component } from 'react';
// import './App.css';
// import NewTask from './Components/NewTask'
// import List from './Components/List'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       toDoList: []
//     }
//     this.handleAddTask = this.handleAddTask.bind(this)
//   }

//   handleAddTask(val) {
//     this.setState({toDoList: [...this.state.toDoList, val]})
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>My to-do list:</h1>
//         <NewTask addTask={this.handleAddTask}/>
//         <List taskList={this.state.toDoList}/>
//       </div>
//     )
//   }
// }

// export default App;

//SOLUTION CODE:
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from "./Components/NewTask";
import List from "./Components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
