import * as React from 'react'
import { RecordData } from '../../types'

interface Props {
  columns: Array<string>,
  data: RecordData,
  shouldRenderCollapser: boolean,
  onCollapserClick: () => void
  isCollapsed: boolean,
  onDeleteClick: () => void
}

export default class Data extends React.Component<Props> {
  renderCollapser() {
    const {
      shouldRenderCollapser,
      onCollapserClick,
      isCollapsed
    } = this.props

    if (shouldRenderCollapser) {
      return <td
        onClick={onCollapserClick}
        key="collapser"
        id='collapserCell'
      >{isCollapsed ? 'Expand' : 'Collapse'}</td>
    }
    return <td key="collapser" />
  }

  renderDelete() {
    const {
      onDeleteClick
    } = this.props

    return (
      <td
        onClick={onDeleteClick}
        key="delete"
        id='deleteCell'
      >Delete</td>
    )
  }

  render () {
    const {
      columns,
      data
    } = this.props

    if (!data) {
      return null;
    }
    const dataCells = columns.map((key: string) => {
      return (<td key={key}>{data[key]}</td>)
    })

    return (
      <tr>
        {this.renderCollapser()}
        {this.renderDelete()}
        {dataCells}
      </tr>
    )
  }
}
