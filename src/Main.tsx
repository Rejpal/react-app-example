import * as React from 'react';
import './Main.css'
import Record from './Table/Record/Record'
import Header from './Table/Header'

export interface PacientObject {[key: string]: string}
export interface MainPacient {
  data: PacientObject
  kids: {[key: string]: { records: Array<MainPacient>}}
}

interface Props {
  data: Array<MainPacient>
}

export default class Main extends React.Component<Props> {

  render() {
    const {data} = this.props;
    let header = null;
    let rows: Array<JSX.Element> = [];
    if (!data) {
      return null;
    }

    if(typeof data[0].data === 'object') {
      const headerKeys = Object.keys(data[0].data)
      header = <Header headerKeys={headerKeys} />
      data.forEach((entry, index) => {
        const record = <Record columns={headerKeys} item={entry} key={index} />
        if (record) {
          rows.push(record)
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
