import React, { Component } from 'react'

export default class GoalList extends Component {

  render() {
    return (
      <div>
        <div className="panel panel-default">

  <div className="panel-heading">
    <h2>{this.props.projName}</h2>
  </div>

  <ul className="list-group">
          <li className="list-group-item">Item one</li>
          <li  className="list-group-item">Item two</li>
          <li className="list-group-item">Item three</li>
          <li className="list-group-item">Item four</li>
          <li className="list-group-item">Item five</li>
        </ul>
      </div>
    </div> )
  }
}
