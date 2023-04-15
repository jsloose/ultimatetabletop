//Saved as: Test2/App_v0.jsx

import React, { Component } from 'react'

let a = 0;

class App extends Component {
  constructor(props){
    super(props)
     
    // Set initial state
    this.state = {msg : 'Hi, There!'}
     
    // Binding this keyword
    this.handleClick = this.handleClick.bind(this)
  }
 
  handleClick(){
   
    // Changing state
    if (a === 0) {
		this.setState({msg : 'Welcome to the React world!'})
		a = 1;
	}
	else {
		this.setState({msg : "We've got cookies!"})
		a = 0;
	}
  }
   
  render(){
    return (
      <div>
        <h2>Message :</h2>
         
 
<p>{this.state.msg}</p>
 
 
         
        {/* Set click handler */}
        <button onClick={this.handleClick}>
          Click here!
        </button>
      </div>
    )
  }
}
 
export default App

