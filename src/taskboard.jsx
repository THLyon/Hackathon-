import React, { Component } from 'react';
import Task from './task.jsx';
class TaskBoard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    for(let i = 0; i < this.props.taskList.length; i++){
      arrTask.push(<Task key={i} taskName={this.props.taskList[i]} finishTask={this.props.finishTask}></Task>)
    }
    return(
      {arrTask}
    )
  }
}

export default TaskBoard;