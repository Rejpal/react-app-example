import * as React from 'react'
import { MainPacient } from '../Main'
import Header from './Header'
import Record from './Record/Record'

interface Props {
  records: Array<MainPacient>
  tableName: string
}

export default class Table extends React.Component<Props> {
  renderRecords (columns: Array<string>, records: Array<MainPacient>): Array<JSX.Element> {
    const recordComponents: Array<JSX.Element> = []
    records.forEach((record, index) => {
        const recordComponent = <Record columns={columns} item={record} key={index} />
        if (recordComponent) {
          recordComponents.push(recordComponent)
        }
      })

    return recordComponents
  }

  render () {
    const {tableName, records} = this.props
    const headerKeys = Object.keys(records[0].data)
    return (
      <table>
        <th>
          <td>{tableName}</td>
        </th>
        <Header headerKeys={headerKeys} />
        {this.renderRecords(headerKeys, records)}
      </table>
    )
  }
}
