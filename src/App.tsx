import * as React from 'react'
import './App.css'
import Table from './Table/Table'
import { observer } from 'mobx-react'
import AppStore from './AppStore'

@observer
class App extends React.Component {
  handleDelete = () => {
    AppStore.deleteItem(0)
  }
  render() {
    return (
      <div className="App">
        <Table records={AppStore.data} />
        <button onClick={this.handleDelete}>Delete first row</button>
      </div>
    );
  }
}

export default App;
