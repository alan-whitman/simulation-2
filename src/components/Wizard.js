import React from 'react';
import './Wizard.css'
import { Link } from 'react-router-dom';

const Addnew = (props) => {
    return(
        <div className="Wizard">
            <div className="wizard-elements">
                <div className="wizard-header">
                    <h2>Add A New Property</h2>
                    <Link to="/" className="cancel-button">Cancel</Link>
                </div>
                <hr />
                <div className="wizard-form">
                
                </div>
            </div>
        </div>
    )
}

export default Addnew;