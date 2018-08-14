import React, { Component } from 'react';
import { connect } from 'redux';
import { registeringReducer } from 'app/containers/App/reducer';

registeringReducer();

class App extends Component { 

  render() {
    return (<div>Hello world</div>);
  }
}

const mapStateToProps = state => ({
  
})

export default App;
