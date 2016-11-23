import React, { Component } from 'react'

export default class GoalNumber extends Component {
  constructor(props) {
      super(props);
      this.state = {value: this.props.current};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A value was submitted: ' + this.state.value);
        // report to server
        event.preventDefault();
      }

  render() {
    return (
      <div>
        <div className="panel panel-default">

          <div className="panel-heading">
            <h2>{this.props.projName}</h2>
          </div>

          <h3>Target: {this.props.target}</h3>
          <h3>Current: {this.state.value}</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Log New Value: </p>
              <input type="text" value={this.state.value} onChange={this.handleChange}  />
          </label>
          <input type="submit" value="Submit" />
         </form>
       </div>
    </div> )
  }
}
