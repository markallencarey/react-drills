//MY SOLUTION:
// import React, { Component } from 'react'

// class NewTask extends Component {
//   constructor() {
//     super()
//     this.state = {
//       userInput: ''
//     }
//     this.addToList = this.addToList.bind(this)
//   }

//   handleInput(val) {
//     this.setState({ userInput: val })
//   }

//   addToList() {
//     this.props.push(this.state.userInput)
//     this.setState({ input: '' })
//   }

//   render() {
//     return <div>
//       <input
//         value={this.state.userInput}
//         placeholder='Enter a new task'
//         onChange={(e) => this.handleInput(e.target.value)} />
//       <button onClick={this.addToList}>Add</button>
//     </div>
//   }
// }

// export default NewTask

//SOLUTION CODE:
import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;