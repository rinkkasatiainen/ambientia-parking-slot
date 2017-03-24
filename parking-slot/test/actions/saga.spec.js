import React from 'react'
import { expect } from 'chai'

import { call, takeEvery } from 'redux-saga/effects'
import {makeReservation} from '../../src/base.js'
import * as sagas from '../../src/actions/saga'
import * as actionCreators from '../../src/actions/actionCreators'


describe('sagas', () => {

  describe('make reservation', () => {

    it('should take a RESERVE action', () => {
      const action = actionCreators.reserve()
      const gen = sagas.reserveSlot( action )
      const effect = gen.next()
      const expected = call ( makeReservation ) 
      expect(effect.value).to.be.eql( expected )


      console.log(effect)
    })
  })
})
