import React, { Component } from 'react';
class Graveyard extends Component{
  constructor(props){
      super(props); 
  }
  
  render(){
      return (
      <div class ='graveyard'>
        <p>Dead Rabbits: {this.props.count}</p>
      </div>
      )
  }
}

export default Graveyard;