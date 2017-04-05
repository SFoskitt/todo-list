import React, { Component } from 'react';
import Task from './Task';

class List extends Component {
  
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    console.log('this.props.tasks List.js', this.props.tasks);
    return (
      <div>
        <ul className="list">
          {this.props.tasks.map(task => {
            return <Task key={task.id} title={task.content} />
          })}
        </ul>
      </div>
    )
  }
}

export default List;
