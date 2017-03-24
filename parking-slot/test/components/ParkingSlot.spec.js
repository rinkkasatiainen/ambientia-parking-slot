import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ParkingSlot from '../../src/components/ParkingSlot'

describe('<ParkingSlot>', () => {

  let reserveCalled = false
  const props = {
    reserve: () => {
       reserveCalled = true
    }
  }

  it('should reserve on click', () => {
    const wrapper = shallow(<ParkingSlot {...props} />)

    wrapper.find('button').simulate('click')

    expect(reserveCalled).to.be.eql(true) 
  })
})
