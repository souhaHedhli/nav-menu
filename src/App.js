import React, { Component } from 'react';
import Menu from './components/nav-menu/nav-menu.js';
import './App.css';
const items = [{
               id: 'home',
               url:'#',
               text: 'Home',
               active: false
             },
             {
               id: 'services',
               url:'#',
               text: 'Services',
               active: false,
               dropdown: [{
                 id: 'for-entrepreneurs',
                 url:'#',
                 text: 'For entrepreneurs',
               }, {
                 id: 'for-students',
                 url:'#',
                 text: 'For students',
               }, {
                 id: 'for-hobbyists',
                 url:'#',
                 text: 'For hobbyists',
               }]
             },
             {
               id: 'contact',
               url:'#',
               text: 'Contact',
               active: false
             }
             ]
class App extends Component {
  render() {
    return (
      <div className="App">
        {items.map((item)=> <Menu {...item}/>)}
      </div>
    );
  }
}

export default App;
