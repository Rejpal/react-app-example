import * as React from 'react'
import Data from './Data'
import {shallow} from 'enzyme'

describe('<Data>', () => {
  const defaultProps = {
    columns: ['a', 'b', 'c'],
    data: {
      a: 'testA',
      b: 'testB',
      c: 'testC'
    },
    shouldRenderCollapser: false,
    onCollapserClick: jest.fn()
  }

  it('renders without collapser', () => {
    expect(shallow(<Data {...defaultProps} />)).toMatchSnapshot()
  })

  it('renders with collapser', () => {
    expect(shallow(<Data {...defaultProps} shouldRenderCollapser={true} />)).toMatchSnapshot()
  })

  it('propagates click on collapser', () => {
    const dummyEvent = {test: 'event'}
    const collapserClickMock = jest.fn()
    const wrapper = shallow(
      <Data
        {...defaultProps}
        shouldRenderCollapser={true}
        onCollapserClick={collapserClickMock}
      />
    )
    wrapper.find('#collapserCell').simulate('click', dummyEvent)
    expect(collapserClickMock).toHaveBeenCalledTimes(1)
    expect(collapserClickMock).toHaveBeenCalledWith(dummyEvent)
  })
})
