import * as React from 'react'
import { IRecord } from '../types'
import Header from './Header'
import Record from './Record/Record'

interface Props {
  records: Array<IRecord>
  tableName?: string,
  onDelete: (itemId: number) => void,
  updateRecords: (newRecords: Array<IRecord>) => void
}

export default class Table extends React.Component<Props> {
  handleDeleteRecord = (recordId: number) => {
    this.props.onDelete(recordId)
  }

  handleUpdateRecord = (index: number, newRecord: IRecord) => {
    const { updateRecords, records } = this.props
    const newRecords = [...records]
    newRecords[index] = newRecord
    updateRecords(newRecords)
  }

  renderRecords (columns: Array<string>, records: Array<IRecord>): Array<JSX.Element> {
    const recordComponents: Array<JSX.Element> = []
    records.forEach((record, index) => {
        const recordComponent = <Record
          columns={columns}
          item={record}
          itemId={index}
          onDelete={this.handleDeleteRecord}
          updateRecord={this.handleUpdateRecord}
          key={index}
        />
        if (recordComponent) {
          recordComponents.push(recordComponent)
        }
      })

    return recordComponents
  }

  renderTableName (tableName?: string) {
    if (!tableName) {
      return null
    }

    return (
      <th>
        <td>{tableName}</td>
      </th>
    )
  }

  render () {
    const {tableName, records} = this.props
    const dataKeys = Object.keys(records[0].data)
    const headerKeys = [
      'Expand',
      'Delete',
      ...dataKeys
    ]
    return (
      <table>
        <thead>
          {this.renderTableName(tableName)}
          <Header headerKeys={headerKeys} />
        </thead>
        <tbody>
          {this.renderRecords(dataKeys, records)}
        </tbody>
      </table>
    )
  }
}
