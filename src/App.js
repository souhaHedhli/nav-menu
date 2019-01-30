import React, { Component } from 'react';
import Menu from './components/nav-menu/nav-menu.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App d-flex justify-content-center">
        <Menu />
      </div>
    );
  }
}

export default App;
