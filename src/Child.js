import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      // prop now being passed into a React event handler
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
      // now that change changeColor of handleColorChange takes in an argument,
      // we'll need to update the onClick of Child to be a function that invokes
      // this.props.handleColorChange and passes in a random color as the argument
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}
// sibling components cannot pass each other data
export default Child
