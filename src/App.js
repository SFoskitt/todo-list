import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import { tasks } from './tasks_data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Crazy-Simple Task List</h2>
        </div>
        <p className="App-intro">
          <List tasks={this.state.tasks}/>
        </p>
      </div>
    );
  }
}

export default App;
