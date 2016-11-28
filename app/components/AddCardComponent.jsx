import React, { Component } from 'react'

export default class AddCardComponent extends Component {
  constructor(props) {
    super(props);
    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard() {
    alert('Add New Card Button pushed');
  }
  render() {
    return (
      <div>
        <div className="panel panel-default">

  <div className="panel-heading">
    <h2>Add New Card <span onClick={this.addNewCard} className="glyphicon glyphicon-plus glyphicon-large pull-right"></span></h2>

    </div>

    </div>
  </div>
    )
  }

}
