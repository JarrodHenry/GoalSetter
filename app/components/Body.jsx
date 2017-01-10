import React, { Component } from 'react'
import { GoalList } from './GoalList'
import GoalNumber from './GoalNumber'
import GoalHabit from './GoalHabit'
import AddCardComponent from './AddCardComponent'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';

export default class Body extends Component {
  constructor(props) {
  super(props);
}

  render() {
    return (
        <div className="container">
            <Draggable grid={[20,20]}>
            <div className="col-xs-6 col-md-4">
                <GoalList />
              </div>
            </Draggable>
            <Draggable grid={[20,20]}>
            <div className="col-xs-6 col-md-4">
              <GoalNumber />
            </div>
            </Draggable>

              <Draggable grid={[20,20]}>
              <div className="col-xs-6 col-md-4">
                <GoalHabit />
              </div>
              </Draggable>
              <Draggable>
              <div className="col-xs-6 col-md-4">
                <AddCardComponent />
              </div>
              </Draggable>
          </div>
         )
  }
}
