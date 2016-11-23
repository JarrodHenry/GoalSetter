import React, { Component } from 'react'

export default class GoalList extends Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);

  }

  handleEdit(event) {
    alert('The edit button was clicked');
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">

  <div className="panel-heading">
    <h2>{this.props.projName}<span onClick={this.handleEdit} className="glyphicon glyphicon-edit pull-right"></span></h2>
  </div>

  <ul className="list-group">
          <li className="list-group-item"><div className="checkbox checkbox-inline"><label><input type="checkbox" className="checkbox checkbox-inline" />Item one</label></div></li>
          <li className="list-group-item"><div className="checkbox checkbox-inline"><label><input type="checkbox" className="checkbox checkbox-inline" />Item two</label></div></li>
          <li className="list-group-item"><div className="checkbox checkbox-inline"><label><input type="checkbox" className="checkbox checkbox-inline" />Item three</label></div></li>
          <li className="list-group-item"><div className="checkbox checkbox-inline"><label><input type="checkbox" className="checkbox checkbox-inline" />Item four</label></div></li>
          <li className="list-group-item"><div className="checkbox checkbox-inline"><label><input type="checkbox" className="checkbox checkbox-inline" />Item five</label></div></li>
        </ul>
      </div>
    </div> )
  }
}
