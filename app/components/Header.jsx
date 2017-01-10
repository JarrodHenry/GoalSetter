import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props) {
      super(props);
      this.refreshClicked = this.refreshClicked.bind(this);
    }

    refreshClicked() {
      window.location.reload();
    }

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

                <div className="nav navbar-nav navbar-right">
                <button className="btn btn-default btn-lg">
                  <span onClick={this.refreshClicked} className="glyphicon glyphicon-refresh"></span>
                </button>
                </div>
              </div>


            </div>

          </nav>
          </div>
        )
    }
}
