import React, { Component } from 'react';
import './Dashboard.css';
import House from './House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    // constructor() {
    //     super()
    // }
    componentDidMount() {
        this.props.getHouses();
    }
    render() {
        return ( 
            <div className="Dashboard">
                <div className="dashboard-elements">
                    <div className="dashboard-header">
                        <h2>Dashboard</h2>
                        <Link to="/wizard" className="add-new-button">Add New Property</Link>
                    </div>
                    <hr />
                    <div className="Houses">
                        <h3>Home Listings</h3>
                        {this.props.houses.map((house, i) => {
                            return <House house={house} key={i} deleteHouse={this.props.deleteHouse} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;