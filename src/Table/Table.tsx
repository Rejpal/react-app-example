import * as React from 'react'
import { IRecord } from '../types'
import Header from './Header'
import Record from './Record/Record'

interface Props {
  records: Array<IRecord>
  tableName?: string
}

export default class Table extends React.Component<Props> {
  renderRecords (columns: Array<string>, records: Array<IRecord>): Array<JSX.Element> {
    const recordComponents: Array<JSX.Element> = []
    records.forEach((record, index) => {
        const recordComponent = <Record columns={columns} item={record} key={index} />
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
    const headerKeys = Object.keys(records[0].data)
    return (
      <table>
        {this.renderTableName(tableName)}
        <Header headerKeys={headerKeys} />
        {this.renderRecords(headerKeys, records)}
      </table>
    )
  }
}
