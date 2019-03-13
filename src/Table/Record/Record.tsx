import * as React from 'react'
import { IRecord, RecordData } from '../../types'
import Data from './Data'
import Kids from './Kids'

interface Props {
  columns: Array<string>,
  item: IRecord
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

  renderKids(kids: {[key: string]: { records: Array<IRecord>}}, columnCountToBeUsed: number) {
    if (this.state.areKidsCollapsed || Object.keys(kids).length === 0) {
      return null
    }
    return <tr><td colSpan={columnCountToBeUsed}><Kids kids={kids} /></td></tr>
  }

  handleCollapserClick = () => {
    this.setState({areKidsCollapsed: !this.state.areKidsCollapsed})
  }

  render () {
    const {columns, item} = this.props
    return (
      <React.Fragment>
        <Data
          columns={columns}
          data={item.data}
          shouldRenderCollapser={Object.keys(item.kids).length > 0}
          onCollapserClick={this.handleCollapserClick}
        />
        {this.renderKids(item.kids, columns.length + 1)}
      </React.Fragment>
    )
  }
}
