import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import House from './House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }
    componentDidMount() {
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
            <div className="Dashboard">
                <div className="dashboard-elements">
                    <div className="dashboard-header">
                        <h2>Dashboard</h2>
                        <Link to="/wizard" class="add-new-button">Add New Property</Link>
                    </div>
                    <hr />
                    <div className="Houses">
                        <h3>Home Listings</h3>
                        {this.state.houses.map((house, i) => {
                            return <House house={house} key={i} deleteHouse={this.deleteHouse} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;