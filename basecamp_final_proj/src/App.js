import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example.js';
import Example2 from './Example2.js';
import Result from './Result.js';
import Example3 from './Example3';

class App extends Component {
  state = {counter: 0};
  incrementNumber = (incrementValue) => 
    {
        this.setState
        (
            (prevState) => 
            (
                {
                    counter: prevState.counter + incrementValue
                }
            )
        );
    };
    resetNumber = () =>
    {
      this.setState
        (
            (prevState) => 
            (
                {
                    counter: 0
                }
            )
        );
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id ="AA">
            Just do it.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wanna learn how to React?
          </a>
          <Example/>
          <Example2 incrementValue = {1} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {2} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {3} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {4} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {5} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {6} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {7} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {8} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {9} onClickFunction={this.incrementNumber}/>
          <Example2 incrementValue = {0} onClickFunction={this.incrementNumber}/>
          <Example3 onClickFunction={this.resetNumber}/>
          <Result counter={this.state.counter}/>
        </header>
      </div>
    );
  }
}

export default App;
