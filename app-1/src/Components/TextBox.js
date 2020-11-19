import React, { Component } from "react"

class TextBox extends Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
      output: "",
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
    this.state.output = val
    this.setState({ output: val })
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.handleChange(e.target.value)
          }}
        />
        <div>{this.state.output}</div>
      </div>
    );
  }
}

export default TextBox;
