import React, { Component } from 'react';
import Task from './Task';

class List extends Component {

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    return (
      <div>
        {/* temp hold tasks list while quiz questions */}
        {/*{this.props.tasks.map(task => {
          return <Task key={task.id} title={task.title} />
        })}*/}
        {this.props.questions.map((question) => {
          return <Task title={question.question} />
        })}
      </div>
    )
  }

  // constructor () {
  //   super();
    // var ans;
    // fetch('/api.php?amount=5&category=17&difficulty=easy&type=multiple')
    //   .then(response => { 
    //     if(response.ok){
    //       return response.json();
    //     }
    //   })
    //   .then(data => {
    //     console.log('data.results', data.results);
    //     ans = data.results;
    //   });
    //   console.log('ans?', ans);
    //   this.state = {
    //     questions: ans
    //   }
  // }

  // componentWillMount(){
    // fetch('/api.php?amount=5&category=17&difficulty=easy&type=multiple')
    // .then(response => { 
    //   if(response.ok){
    //     return response.json();
    //   }
    // })
    // .then(data => {
    //   console.log('data.results', data.results);
    //   this.ans = data.results;
    //   // this.state = {
    //   //   questions: data.results
    //   // }
    // })
  // }

}

export default List;
