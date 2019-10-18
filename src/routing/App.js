import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../component/Navbar/index';
import Home from '../component/Home/index';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationComponent: ['']
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar navigationComponent={this.state.navigationComponent}/> <br />
          <Route exact path={'/' + this.state.navigationComponent[0]} render={() => <Home />} />
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
