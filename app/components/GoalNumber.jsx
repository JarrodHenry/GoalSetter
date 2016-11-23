import React, { Component } from 'react'

export default class GoalNumber extends Component {

  render() {
    return (
      <div>
        <div className="panel panel-default">

  <div className="panel-heading">
    <h2>{this.props.projName}</h2>
  </div>

      <h3>Target: {this.props.target}</h3>
      <h3>Current: {this.props.current}</h3>
      </div>
    </div> )
  }
}
