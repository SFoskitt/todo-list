import React, { Component } from 'react';
// import logo from './logo.svg';
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
    // let url = 'https://checkvist.com/checklists/603780/tasks.json';
    // let headers = {
    //   'accept': 'application/json',
    //   'authorization': 'Basic ZGV2ZWxvcGRoYXJtYUBnbWFpbC5jb206aG90dHViMjIy',
    //   'content-type': 'application/json'
    // }
    // fetch(url, {
    //   headers: {
    //     'origin': 'http://localhost:3000',
    //     'accept': 'application/json',
    //     'authorization': 'Basic ZGV2ZWxvcGRoYXJtYUBnbWFpbC5jb206aG90dHViMjIy',
    //     'content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    //   }
    // })
    // .then(response => { 
    //   if(response.ok){
    //     return response.json();
    //   }
    // })
    // .then(data => {
    //   this.setState({
    //     questions: data.results
    //   })
    // });

    fetch('https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple')
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

    // "proxy": "https://checkvist.com"    
    // "proxy": "http://localhost:3000"

  }

  /*
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
  */

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
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
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
