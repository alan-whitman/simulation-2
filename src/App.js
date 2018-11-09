import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" component={Dashboard} />
      </div>
    );
  }
}

export default App;
