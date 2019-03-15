import * as React from 'react'
import { IRecord, RecordData, IKids } from '../../types'
import Data from './Data'
import Kids from './Kids'

interface Props {
  columns: Array<string>,
  item: IRecord
  itemId: number,
  onDelete: (itemId: number) => void,
  updateRecord: (itemId:number, newKids: IRecord) => void
}

interface State {
  areKidsCollapsed: boolean
}

export default class Row extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      areKidsCollapsed: true
    }
  }

  handleDeleteClick = () => {
    this.props.onDelete(this.props.itemId)
  }

  handleUpdateKids = (newKids: IKids) => {
    const { item, itemId } = this.props
    this.props.updateRecord(itemId, {
      data: item.data,
      kids: newKids
    })
  }

  renderKids(kids: IKids, columnCountToBeUsed: number) {
    if (this.state.areKidsCollapsed || Object.keys(kids).length === 0) {
      return null
    }
    return <tr><td colSpan={columnCountToBeUsed}><Kids kids={kids} updateKids={this.handleUpdateKids} /></td></tr>
  }

  handleCollapserClick = () => {
    this.setState({areKidsCollapsed: !this.state.areKidsCollapsed})
  }

  render () {
    const { columns, item } = this.props
    const { areKidsCollapsed } = this.state
    return (
      <React.Fragment>
        <Data
          columns={columns}
          data={item.data}
          shouldRenderCollapser={Object.keys(item.kids).length > 0}
          onCollapserClick={this.handleCollapserClick}
          isCollapsed={areKidsCollapsed}
          onDeleteClick={this.handleDeleteClick}
        />
        {this.renderKids(item.kids, columns.length + 2)}
      </React.Fragment>
    )
  }
}
