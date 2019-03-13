import * as React from 'react'
import { RecordData } from '../../types'

interface Props {
  columns: Array<string>,
  data: RecordData,
  shouldRenderCollapser: boolean,
  onCollapserClick: () => void
}

export default function Data (props: Props) {
  const {columns, data, shouldRenderCollapser, onCollapserClick} = props

  if (!data) {
      return null;
    }
    const dataCells = columns.map((key: string) => {
      return (<td>{data[key]}</td>)
    })

    const collapser = shouldRenderCollapser ? <td onClick={onCollapserClick}>x</td> : <td />
    const result = [collapser].concat(dataCells)

    if (!result) {
      return null;
    }

    return (
      <tr>
        {result}
      </tr>
    )
}
