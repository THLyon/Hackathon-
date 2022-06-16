import React, { Component } from "react";
import { render } from 'react-dom';
import TaskBoard from './taskboard.jsx';
import Animal from './animal.jsx';
import Graveyard from './graveyard.jsx';
import Textbox from './textbox.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      animalImg: './statics/happy_animal',
      taskList: [],
      count: 0
    }
    this.updateAnimal = this.updateAnimal.bind(this);
    // this.updateTask = this.updateTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
  }

  updateAnimal(mood){
    const happy = './statics/happy_animal';
    const worry = './statics/worry_animal';
    const dead = './statics/dead_animal';
    if(mood === 'happy'){
      this.setState({animalImg: happy})
    } else if (mood === 'worry'){
      this.setState({animalImg: worry})
    } else if (mood == 'dead'){
      this.setState({animalImg: dead})
    }
  }
  
  
  counter(){
    this.setState((state) => {
        count: state.count + 1; 
    });
};

  finishTask(index){
    const change = this.state.taskList;
    this.setState({taskList: change.splice(index, 1)})

  }

  render(){
    return(
      <div>
        <TaskBoard taskList={this.state.taskList} finishTask={this.state.finishTask}/>
        <Textbox updateTask={this.updateTask}/>
        <Graveyard count={this.state.count}/>
        <Animal animalImg ={this.state.animalImg}/>
      </div>
    )
  }
}

//testing
class Test extends Component {
  render(){
    return (
      <h2>Testing!!!</h2>
    )
  }
}

//render(<App/>, document.querySelector('#root'));
//ReactDOM.render( <App/> , document.getElementById("root"));
ReactDOM.render(<Test/>, document.querySelector('#root'));
