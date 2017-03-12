import React, { Component } from 'react';
import logo from './logo.svg';
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
    fetch('http://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple')
    .then(response => { 
      if(response.ok){
        return response.json();
      }
    })
    .then(data => {
      this.setState({
        questions: data.results
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Crazy-Simple Task List</h2>
        </div>
        <div className="App-intro">
          <List getQuestions={this.handleGetQuestions} questions={this.state.questions} />
          {/* temp hold data forward to List while quiz questions */}
          {/* <List tasks={this.state.tasks}/> */}
        </div>
      </div>
    );
  }
}

export default App;
