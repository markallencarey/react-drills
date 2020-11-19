import React, {Component} from 'react';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.addToList = this.addToList.bind(this)
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  addToList(val) {
    this.setState({
      toDoList: [...this.state.toDoList, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    let toDoList = this.state.toDoList.map((element, index) => {
      return <Todo key={index} task={element} />
    })
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input placeholder='Enter a new task' onChange={(e) => {this.handleChange(e.target.value)}}/>
      <button onClick={this.addToList}>Add</button>
      {toDoList}
    </div>
  )
  }
}

export default App;
