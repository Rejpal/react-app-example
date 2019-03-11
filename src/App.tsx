import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import data from './api/data-1.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main data={data} />
      </div>
    );
  }
}

export default App;
