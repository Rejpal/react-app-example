import * as React from 'react'
import './App.css'
import Table from './Table/Table'
import data from './api/data-1.json'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Table records={data} />
      </div>
    );
  }
}

export default App;
