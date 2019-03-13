import * as React from 'react'
import Table from '../Table'
import { IRecord } from '../../types'

interface Props {
  kids: {[key: string]: {
    records: Array<IRecord>
  }}
}

export default function Kids(props: Props) {
  const { kids } = props
  const kidsKeys = Object.keys(kids)
  debugger
  if (kidsKeys.length > 0) {
    return <Table tableName={kidsKeys[0]} records={kids[kidsKeys[0]].records} />
  }

  return <tr>{JSON.stringify(kids)}</tr>
}
