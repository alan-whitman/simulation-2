import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../redux/reducers/houses';

const WizardOne = (props) => {
    return(
        <div className="WizardOne">
            Property Name:<br /><br /><input onChange={e => props.updateName(e.target.value)} value={props.name} /><br /><br />
            Address:<br /><br /><input onChange={e => props.updateAddress(e.target.value)} value={props.address} /><br /><br />
            City:<br /><br /><input onChange={e => props.updateCity(e.target.value)} value={props.city} /><br /><br />
            State:<br /><br /><input maxLength="2" onChange={e => props.updateState(e.target.value)} value={props.state} /><br /><br />
            Zip:<br /><br /><input type="number" maxLength="5" onChange={e => props.updateZip(e.target.value)} value={props.zip} /><br /><br />
            <Link className="cancel-button" to="/wizard/WizardTwo">Next</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip})(WizardOne);