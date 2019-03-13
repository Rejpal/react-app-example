import * as React from 'react'
import { MainPacient, PacientObject } from '../../Main'
import Data from './Data'
import Kids from './Kids'

interface Props {
  columns: Array<string>,
  item: MainPacient
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

  renderKids(kids: {[key: string]: { records: Array<MainPacient>}}) {
    if (this.state.areKidsCollapsed || Object.keys(kids).length === 0) {
      return null
    }
    return <Kids kids={kids} />
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
        {this.renderKids(item.kids)}
      </React.Fragment>
    )
  }
}
