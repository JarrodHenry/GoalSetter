import React, { Component } from 'react'
import { GoalList } from './GoalList'
import GoalNumber from './GoalNumber'
import GoalHabit from './GoalHabit'
import AddCardComponent from './AddCardComponent'

export default class Body extends Component {
  constructor(props) {
  super(props);

  }
  render() {
    return (
        <div className="container">
            <div className="col-xs-6 col-md-4">
                <GoalList />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalList />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalList />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalHabit />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalHabit />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalNumber />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalNumber />
              </div>
              <div className="col-xs-6 col-md-4">
                <AddCardComponent />
              </div>
          </div>
         )
  }
}
