import React, { Component } from 'react';
import './Wizard.css'
import { Route, Switch } from 'react-router-dom';
import WizardOne from './WizardOne';
import WizardTwo from './WizardTwo';
import WizardThree from './WizardThree';
import { cancelAddNew } from '../redux/reducers/houses';
import { connect } from 'react-redux';


class Addnew extends Component {
    constructor() {
        super();
        this.cancel = this.cancel.bind(this);
    }
    cancel() {
        this.props.cancelAddNew();
        this.props.history.push('/');
    }
    render() {
        return(
            <div className="Wizard">
            <div className="wizard-elements">
                <div className="wizard-header">
                    <h2>Add A New Property</h2>
                    <div className="cancel-button" onClick={this.cancel}>Cancel</div>
                </div>
                <hr />
                <div className="wizard-form">
                    <Switch>
                        <Route path="/wizard" exact component={WizardOne} />
                        <Route path="/wizard/WizardTwo" exact component={WizardTwo} />
                        <Route path="/wizard/WizardThree" exact render={(props) => <WizardThree {...props} getHouses={this.props.getHouses} />} />
                    </Switch>
                    
                </div>
            </div>
        </div>
 
        )
    }
}

export default connect(() => {return {}}, {cancelAddNew})(Addnew);