import React, { Component } from 'react'

export default class GoalNumber extends Component {
  constructor(props) {
      super(props);
      this.state = {};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.URL = "http://localhost:2681/api/goalnum";
    }
    handleChange(event) {
      this.setState({current: event.target.value});
    }

    handleEdit(event) {



    //  alert('The edit button was clicked');
    }
    handleSubmit(event) {

      // Update using the fetch api to post
      fetch(this.URL,
      {
        method: "POST",
        headers: {
   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
 },
        body: "current="+ this.state.current

      });
        alert('A value was submitted: ' + this.state.current);
          // And do a pull back to confirm the new value

        fetch(this.URL).then(function(response) {
         // Convert to JSON
         return response.json();
        }).then( (response) => {
          this.setState({target: response.target, current: response.current, projName: response.name})

        });
        // report to server
        event.preventDefault();
      }

   componentWillMount(props) {
     fetch(this.URL).then(function(response) {
      // Convert to JSON
      return response.json();
     }).then( (response) => {
       this.setState({target: response.target, current: response.current, projName: response.name})

     });
   }
  render() {
    return (
      <div>
        <div className="panel panel-default">

          <div className="panel-heading">
            <h2>{this.state.projName}<span onClick={this.handleEdit} className="glyphicon glyphicon-edit pull-right"></span></h2>
          </div>

          <h3>Target: {this.state.target}</h3>
          <h3>Current: {this.state.current}</h3>
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
