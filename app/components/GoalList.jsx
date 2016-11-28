import React, { Component } from 'react'

export class GoalListItem extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <li className="list-group-item">
      <div className="checkbox checkbox-inline">
      <label><input type="checkbox" className="checkbox checkbox-inline" onClick={this.handleClick} />{this.props.itemName}</label>
    </div>
  </li>
    )
  }
}

export class GoalList extends Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEdit(event) {
    alert('The edit button was clicked');
  }

  handleClick(event, number) {
    console.log('clicked checkbox');
    console.log(event);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">

  <div className="panel-heading">
    <h2>{this.props.projName}<span onClick={this.handleEdit} className="glyphicon glyphicon-edit pull-right"></span></h2>
  </div>

  <ul className="list-group">
        <GoalListItem itemName="Item one" />
        <GoalListItem itemName="Item two" />
        <GoalListItem itemName="Item three" />
        <GoalListItem itemName="Item four" />
        <GoalListItem itemName="Item five" />

        </ul>
      </div>
    </div> )
  }
}
