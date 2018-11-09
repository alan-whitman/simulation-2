import React from 'react';
import { connect } from 'react-redux';
import { updateImg } from '../redux/reducers/houses';
import { Link } from 'react-router-dom';
import notFound from '../images/notfound.png';

const WizardTwo = (props) => {
    let image = '';
    if (props.img)
        image = props.img.trim() ? props.img : notFound
    else
        image = notFound;
    return(
        <div className="WizardTwo">
            Image URL:<br /><br /><input onChange={e => props.updateImg(e.target.value)} value={props.img} /><br /><br />
            <div><img className="wizard-image" src={image} alt="House" /></div><br /><br />
            <div style={{display: 'flex'}}>
                <Link className="cancel-button" to="/wizard">Previous</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="cancel-button" to="/wizard/WizardThree">Next</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, {updateImg})(WizardTwo);