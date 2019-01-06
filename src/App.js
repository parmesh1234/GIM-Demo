import React, { Component } from 'react';
import classes from './App.module.css';
import Sidebar from './Components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
         <Sidebar/>
      </div>
    );
  }
}

export default App;
