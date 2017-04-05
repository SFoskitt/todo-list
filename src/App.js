import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(){
    super();

    this.state = {
      tasks: []
    }
    this.handleGetTasks = this.handleGetTasks.bind(this);
  }

  handleGetTasks() {
    fetch('/tasks')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        tasks: data
      })
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Crazy-Simple Task List</h2>
        </div>
        <div className="App-intro">
          <span>It's not a task list - it's quiz questions until I say otherwise.</span>
        </div>
        <div className="Outer-lsit">
          <List getTasks={this.handleGetTasks} tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
