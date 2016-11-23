import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
        <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Goal Setter</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Overview</a></li>
                  <li><a href="#">About</a></li>
                </ul>

              </div>
            </div>
          </nav>
          </div>
        )
    }
}
