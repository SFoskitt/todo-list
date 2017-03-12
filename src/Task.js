import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class Task extends Component {
    render () {
      return <li>{this.props.title}</li>
    }
}

export default Task;
