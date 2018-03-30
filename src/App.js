import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './validation.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        input: {},
    }
  }

  componentDidMount() {
  
    Validation.initializeValidation(this);
  }
  
  render() {

    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input />
      </div>
    );
  }
}

export default App;
