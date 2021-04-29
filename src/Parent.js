import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {
// state goes in constructor because constructor goes first
  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
      // state of child components in Parent Component
    }
  }


  changeColor = (newChildColor) => {
    this.setState({
      // setState() is the method we use to change the state
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  // we are going to want to run this changeColor() method
  // when either Child component is clicked
  // so we are going to pass this state changing function as
  // a prop to both Child components

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
      </div>
      // Since the data that represents the color of the two Child components 
      // lives in Parent, we should pass that data down as props
    )
  }
}

export default Parent
