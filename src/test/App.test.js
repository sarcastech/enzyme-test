/* global describe, it, expect */
import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders without crashing', () => {
    let app = shallow(<App />)
    expect(app.find('.App')).toHaveLength(1)
  })
})
