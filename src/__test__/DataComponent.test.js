/* global describe, it, expect */
import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DataComponent from '../DataComponent'
import mockAxios from 'axios'

mockAxios.get.mockImplementationOnce(() =>
  Promise.resolve({
    data: [{name: 'Darth Vader'}]
  })
)

configure({ adapter: new Adapter() })

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

describe('<DataComponent />', () => {
  it('makes a request for JSON data', async () => {
    let component = shallow(<DataComponent />)
    await flushPromises()
    component.update()
    expect(component.state().data[0].name).toContain('Darth Vader')
    expect(component.find('li')).toHaveLength(1)
  })
})
