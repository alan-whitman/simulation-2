import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Wizard from './components/Wizard';
// import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/wizard" component={Wizard} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}



export default App;
