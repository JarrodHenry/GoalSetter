import React, { Component } from 'react'

export class GoalListItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    this.setState({checked: !this.state.checked});
  }

componentWillMount(props) {

  this.setState({checked: this.props.checked});

}
  render() {
    return(
      <li className="list-group-item">
      <div id={this.props.id} className="checkbox checkbox-inline">
      <label><input type="checkbox" className="checkbox checkbox-inline" checked={this.state.checked} onChange={this.handleClick} />{this.props.itemName}</label>
    </div>
  </li>
    )
  }
}

export class GoalList extends Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);

  }

    componentWillMount(props) {

      var result = [];
      //var arItems = [
      //  {name: 'item one', itemChecked: false}, {name: 'item two', itemChecked: false}, {name: 'item three', itemChecked: false},{name: 'item four', itemChecked: false},{name: 'item five', itemChecked: false}];

        var arItems =[];
        fetch('http://localhost:2681/api/goallist').then(function(response) {
        	// Convert to JSON
        	return response.json();
        }).then( (response) => {
          this.setState({arItems: response})

        });

      this.setState({ arItems });
      //this.setState({ result });
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
        {
          this.state.arItems.map((arItem, index)=>(
            <GoalListItem itemName={arItem.name} checked={arItem.itemChecked} key={this.props.projName+index} id={this.props.projName+index} />
          ))
        }
      </ul>
      </div>
    </div> )
  }
}
