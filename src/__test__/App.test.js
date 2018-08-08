/* global describe, it, expect */
import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import Foo from '../Foo'
import DataComponent from '../DataComponent'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  let app = shallow(<App />)
  it('renders with correct css class assigned', () => {
    expect(app.find('.App')).toHaveLength(1)
  })

  it('renders correct welcome message', () => {
    expect(app.find('.App-title').text()).toBe('Welcome to React')
  })

  it('contains a `getting started` paragraph', () => {
    expect(app.find('p').text()).toContain('To get started,')
  })

  it('wraps 2 <Foo /> components', () => {
    expect(app.find(Foo)).toHaveLength(2)
  })

  it('wraps a <DataComponent />', () => {
    expect(app.find(DataComponent)).toHaveLength(1)
  })
})
