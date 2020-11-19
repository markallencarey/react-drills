//MY SOLUTION:
// import React, { Component } from 'react'

// class Todo extends Component {
//   render() {
//     return (
//       <h4>{this.props.task}</h4>
//     )
//   }
// }

// export default Todo

//SOLUTION CODE:
import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}