import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Wizard from './components/Wizard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  getHouses() {
    axios.get('/api/houses').then(res => {
      this.setState({houses: res.data});
    }).catch(err => console.error(err));
  }
  deleteHouse(houseId) {
    axios.delete('/api/houses/' + houseId).then(res => {
        this.setState({houses: res.data})
    }).catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/wizard" render={(props) => <Wizard {...props} getHouses={this.getHouses} />} />
          <Route path="/" render={(props) => <Dashboard {...props} houses={this.state.houses} getHouses={this.getHouses} deleteHouse={this.deleteHouse} />} />
        </Switch>
      </div>
    );
  }
}



export default App;
