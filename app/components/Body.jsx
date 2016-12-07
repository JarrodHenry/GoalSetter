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
                <GoalList projName="Alpha" />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalList projName="Beta" />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalList projName="Gamma"/>
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalHabit projName="Habit A" times="0" />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalHabit projName="Habit B" times="5" />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalNumber projName="Arbitrary Number" target="200" current="195" />
              </div>
              <div className="col-xs-6 col-md-4">
                <GoalNumber projName="Big Trip Fund" target="$15,000" current="$11,950" />
              </div>
              <div className="col-xs-6 col-md-4">
                <AddCardComponent />
              </div>
          </div>
         )
  }
}
