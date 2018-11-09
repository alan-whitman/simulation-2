import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, cancelAddNew } from '../redux/reducers/houses';
import { Link } from 'react-router-dom';
import axios from 'axios';

class WizardThree extends Component {
    constructor() {
        super();
        this.addHouse = this.addHouse.bind(this);
    }
    addHouse() {
        let {name, address, city, state, zip, img, mortgage, rent} = this.props;
        console.log({name, address, city, state, zip, img, mortgage, rent});
        zip = Number(zip);
        mortgage = Number(mortgage);
        rent = Number(rent);
        axios.post('/api/houses', {name, address, city, state, zip, img, mortgage, rent}).then(res => {
            // this.setState({})
        }).catch(err => console.error(err));
        this.props.cancelAddNew();
        this.props.getHouses();
        this.props.history.push('/');
    }
    render() {
        return(
            <div className="WizardThree">
                Recommended Rent: ${this.props.recommendedRent}<br /><br />
                Monthly Mortgage Amount<br /><br />
                <input type="number" onChange={e => this.props.updateMortgage(e.target.value)} value={this.props.mortgage} /><br /><br />
                Desired Monthly Rent<br /><br />
                <input type="number" onChange={e => this.props.updateRent(e.target.value)} value={this.props.rent} /><br /><br />

                <div style={{display: 'flex'}}>
                    <Link className="cancel-button" to="/wizard/WizardTwo">Previous</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="cancel-button" onClick={this.addHouse}>Complete</div>
                </div>
            </div>

        )

    }

}

const mapStateToProps = (state) => {
    return {
        mortgage: state.mortgage,
        rent: state.rent,
        recommendedRent: state.recommendedRent,
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,    
    }
}

export default connect(mapStateToProps, {updateMortgage, updateRent, cancelAddNew})(WizardThree);