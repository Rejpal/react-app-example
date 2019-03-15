import * as React from 'react'

interface Props {
  headerKeys: Array<string>
}

export default function renderHeader(props: Props): JSX.Element {
    const { headerKeys } = props
    const headerCells = headerKeys.map((headerItem: string) => {
      return (
        <th key={headerItem}>{headerItem}</th>
      )
    })

    return (
      <tr>
        {headerCells}
      </tr>
    )
  }
