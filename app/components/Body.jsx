import React, { Component } from 'react'
import GoalList from './GoalList'
import GoalNumber from './GoalNumber'
import GoalHabit from './GoalHabit'

export default class Body extends Component {

  render() {
    return (

          <div className="container">
            <div className="col-xs-6 col-md-4">
              <GoalList projName="One" />
              </div>
              <div className="col-xs-6 col-md-4">
              <GoalList projName="Two" />
              </div>
              <div className="col-xs-6 col-md-4">
              <GoalList projName="Three"/>
              </div>
              <div className="col-xs-6 col-md-4">
              <GoalHabit projName="Flossing" times="231" />
              </div>
              <div className="col-xs-6 col-md-4">
              <GoalHabit projName="Pick up an area" times="5" />
              </div>
              <div className="col-xs-6 col-md-4">
              <GoalNumber projName="Weight" target="203" current="195" />
              </div>
              <div className="col-xs-6 col-md-4">
              <GoalNumber projName="Savings" target="$15,000" current="$11,950" />
              </div>
          </div>    )
  }
}
