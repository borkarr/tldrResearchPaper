import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavCustom from './AppComponents/AppActionBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavCustom />
      </div>
    );
  }
}

export default App;
