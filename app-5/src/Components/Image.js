import React, {Component} from 'react'

class Image extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let imgSrc = this.props.imageLink
    return <div><img src={imgSrc} placeholder='placeholder image' /></div>
  }
}

export default Image