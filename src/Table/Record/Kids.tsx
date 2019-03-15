import * as React from 'react'
import Table from '../Table'
import { IRecord } from '../../types'

interface Props {
  kids: {[key: string]: {
    records: Array<IRecord>
  }}
  updateKids: (newKids: {[key: string]: {
    records: Array<IRecord>
  }}) => void
}

export default class Kids extends React.Component<Props> {
  handleDelete = (recordIndex: number) => {
    const { kids, updateKids } = this.props
    const kidsKey = Object.keys(kids)[0]
    const newRecords = [...kids[kidsKey].records]
    newRecords.splice(recordIndex, 1)
    const newKids = newRecords.length > 0 ? {[kidsKey]: {records: newRecords}} : {}
    updateKids(newKids)
  }

  handleUpdateKids = (newRecords: Array<IRecord>): void => {
    const { kids } = this.props
    const kidsKey = Object.keys(kids)[0]
    const newKids = newRecords.length > 0 ? {[kidsKey]: {records: newRecords}} : {}
    this.props.updateKids(newKids)
  }

  render() {
    const { kids } = this.props
    const kidsKeys = Object.keys(kids)

    if (kidsKeys.length > 0) {
      return <Table
        tableName={kidsKeys[0]}
        records={kids[kidsKeys[0]].records}
        onDelete={this.handleDelete}
        updateRecords={this.handleUpdateKids}
      />
    }

    return <tr>{JSON.stringify(kids)}</tr>
  }
}
