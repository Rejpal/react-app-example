import * as React from 'react'
import './App.css'
import Table from './Table/Table'
import { observer } from 'mobx-react'
import AppStore from './AppStore'

@observer
class App extends React.Component {
  handleDelete = (recordIndex: number) => {
    AppStore.deleteItem(recordIndex)
  }

  render() {
    return (
      <div className="App">
        <Table records={AppStore.data} onDelete={this.handleDelete} updateRecords={AppStore.updateData} />
      </div>
    );
  }
}

export default App;
