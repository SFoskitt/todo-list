import React, { Component } from 'react';
import './App.css';
import List from './List';
// temp hold tasks data while quiz questions
// import { tasks } from './tasks_data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      questions: []
    }
    this.handleGetQuestions = this.handleGetQuestions.bind(this);
  }

  handleGetQuestions() {
    fetch('/tasks')
    // .then(response => { 
    //   if(response.ok){
    //     return response.json();
    //   }
    // })
    .then(data => {
      console.log('data in fetch', data);
      this.setState({
        questions: data.results
      })
    });
  }


  /*
  fetch('/users', {
  headers: {
    'accept': 'application/json',
    'authorization': 'Basic ' + btoa(process.env.REACT_APP_USERNAME + ':' + process.env.REACT_APP_PASSWORD),
    'content-type': 'application/vnd.api+json',
  },
});
  */

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
          <List getQuestions={this.handleGetQuestions} questions={this.state.questions} />
          {/* temp hold data forward to List while quiz questions */}
          {/* <List tasks={this.state.tasks}/> */}
        </div>
      </div>
    );
  }
}

export default App;
