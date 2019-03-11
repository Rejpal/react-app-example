import * as React from 'react';
import './Main.css'

interface PacientObject {[key: string]: string}

interface MainPacient {
  data: PacientObject
  kids: Object
}

interface Props {
  data: Array<MainPacient>
}

export default class Main extends React.Component<Props> {

  renderRowData(columns: Array<string>, item: PacientObject, index: number) {
    if (!item) {
      return null;
    }
    const restOfRow = columns.map((key: string) => {
      return (<td>{item[key]}</td>)
    })
    const result = [<td>x</td>].concat(restOfRow)

    if (!result) {
      return null;
    }

    return (
      <tr>
        {result}
      </tr>
    )
  }

  renderRowKids(kids: Object, index: number) {
    if (Object.keys(kids).length === 0) {
      return null
    }
    return <tr>{JSON.stringify(kids)}</tr>
  }

  renderRow(columns: Array<string>, item: MainPacient, index: number) {
    return (
      <React.Fragment>
        {this.renderRowData(columns, item.data, index)}
        {this.renderRowKids(item.kids, index)}
      </React.Fragment>
    )
  }

  renderHeader(headerKeys: Array<string>) {
    const headerCells = headerKeys.map((headerItem: string) => {
      return (
        <th>{headerItem}</th>
      )
    })
    return (
      <tr>
        <th>
          x
        </th>
        {headerCells}
      </tr>
    )
  }

  render() {
    const {data} = this.props;
    let header = null;
    let rows: Array<JSX.Element> = [];
    if (!data) {
      return null;
    }

    if(typeof data[0].data === 'object') {
      const headerKeys = Object.keys(data[0].data)
      header = this.renderHeader(headerKeys)
      data.forEach((entry, index) => {
        const renderedRow = this.renderRow(headerKeys, entry, index)
        if (renderedRow) {
          rows.push(renderedRow)
        }
      })
    }
    return (
      <div style={{height: '100%', width: '100%'}}>
        <table>
          {header}
          {rows}
        </table>
      </div>
    )
  }
}
