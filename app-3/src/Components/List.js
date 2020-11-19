import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super()

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  displayFood() {
    // let foodsDisplayed = this.state.foods.map((element, index) => {
    //   for (let i = 0; i < foodsDisplayed.length; i++ ) {
    //     if (foodsDisplayed[i].includes(this.state.userInput)) {
    //       return <h2 key={index}>{element}</h2>
    //     }
    //   }
    // })

    let foodsDisplayed = this.state.foods.map((element, index) => {
      if (this.state.foods[index].includes(this.state.userInput)) {
        return <h2 key={index}>{element}</h2>
      }
    })
    return <div>{foodsDisplayed}</div>

  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleChange(e.target.value)} />
        <div>{this.displayFood()}</div>
      </div>
    )

  }
}

export default List