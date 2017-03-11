import React, { Component } from 'react';
import Task from './Task';

class List extends Component {
  render () {
    return (
      <div>
        {this.props.tasks.map(task => {
          return <Task key={task.id} title={task.title} />
        })}
      </div>
    )
  }
}

export default List;
