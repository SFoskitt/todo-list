import React, { Component } from 'react';

class Task extends Component {
    render () {
      return (
        <div className="task">
          <li>{this.props.title}</li>
        </div>
      );      
    }
}

export default Task;
