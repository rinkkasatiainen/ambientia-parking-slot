import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions/actionCreators';
import logo from './logo.svg';
import './App.css';

import ParkingSlot from './components/ParkingSlot'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ParkingSlot { ...this.props }/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reservedToday: state.reservedToday,
    reservedFor : state.reservedFor
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

export const AppCreator = connect( mapStateToProps, mapDispatchToProps )(App)

export default AppCreator;
