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
  get kidsKey() {
    return Object.keys(this.props.kids)[0]
  }

  handleDelete = (recordIndex: number) => {
    const { kids, updateKids } = this.props
    const newRecords = [...kids[this.kidsKey].records]
    newRecords.splice(recordIndex, 1)
    const newKids = newRecords.length > 0 ? {[this.kidsKey]: {records: newRecords}} : {}

    updateKids(newKids)
  }

  handleUpdateKids = (newRecords: Array<IRecord>): void => {
    const { kids, updateKids } = this.props
    const newKids = newRecords.length > 0 ? {[this.kidsKey]: {records: newRecords}} : {}

    updateKids(newKids)
  }

  render() {
    const { kids } = this.props
    const kidsKeys = Object.keys(kids)

    if (kidsKeys.length > 0) {
      return <Table
        tableName={this.kidsKey}
        records={kids[this.kidsKey].records}
        onDelete={this.handleDelete}
        updateRecords={this.handleUpdateKids}
      />
    }

    return <tr>{JSON.stringify(kids)}</tr>
  }
}
