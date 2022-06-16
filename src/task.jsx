import React, { Component } from 'react';

class Task extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class='tasks'>
      <p>{this.props.taskName}</p>
      <button onClick={() => {this.props.finishTask(this.props.key)}}></button>
    </div>
    )
  }
}

export default Task;
