import React, { Component } from 'react'

export default class GoalHabit extends Component {

  render() {
    return (
      <div>
        <div className="panel panel-default">

  <div className="panel-heading">
    <h2>{this.props.projName} - {this.props.times}x</h2>
  </div>
      <div className="btn-group btn-group-justified" role="group">
          <a className="btn btn-group btn-success" role="group">Did It</a>
          <a className="btn btn-group btn-danger" role="group">Did Not Do It</a>
        </div>

      </div>
    </div> )
  }
}
