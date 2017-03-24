import { expect } from 'chai'

import { reservedToday } from '../../src/reducers/index'
import { reserve } from '../../src/actions/actionCreators'



describe('reducers', () => {
  
  describe('reservedToday', () => {
    it('should reserve an unreserved slot', () => {
      console.log(reservedToday)
      const action = reserve() 
      const state = reservedToday(false, action)
      expect(state).to.be.eql(true)
    })
  })

})


