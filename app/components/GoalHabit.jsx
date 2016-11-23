import React, { Component } from 'react'

export default class GoalHabit extends Component {

  constructor(props) {
    super(props)
    this.didNotClick = this.didNotClick.bind(this);
    this.didClick = this.didClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {times: this.props.times};
  }

  didNotClick(event) {
    this.setState({times: 0});
    // report to server
  }

  handleEdit(event) {
    alert('The edit button was clicked');
  }
  didClick(event) {
    this.setState({times: Number(this.state.times)+1});
    //report to server
  }
  render() {
    return (
      <div>
        <div className="panel panel-default">

  <div className="panel-heading">
    <h2>{this.props.projName} - {this.state.times}x <span onClick={this.handleEdit} className="glyphicon glyphicon-edit pull-right"></span></h2>

  </div>
      <div className="btn-group btn-group-justified" role="group">
          <a className="btn btn-group btn-success" onClick={this.didClick} role="group">Did It</a>
          <a className="btn btn-group btn-danger" onClick={this.didNotClick} role="group">Did Not Do It</a>
        </div>

      </div>
    </div> )
  }
}
