import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from './actions/actionCreators'

import ParkingSlot from './components/ParkingSlot'
import LoggedIn from './components/LoggedIn'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <LoggedIn {...this.props} />
                <ParkingSlot {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reservedToday: state.reservedToday
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const AppCreator = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppCreator;
