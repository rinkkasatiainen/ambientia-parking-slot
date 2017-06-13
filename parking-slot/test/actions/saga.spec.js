import React from 'react'
import { expect } from 'chai'

import { call, take, takeEvery } from 'redux-saga/effects'
import {makeReservation, login} from '../../src/base.js'
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

    })
  })

  describe('login flow', () =>  {
      const email = 'aki@iki'
      const password = 'foobar'	
      const action = actionCreators.login(email, password)
    it('should take a LOGIN action', () => {
      const gen = sagas.loginFlow()
      const effect = gen.next().value
      console.log(effect)
      expect(effect).to.be.eql( take('LOGIN') )
    })
    it('should call login from base', () => {
      const gen = sagas.loginFlow()
      gen.next()
      const expected = call(login, email, password)
      const effect = gen.next(action).value
      expect(effect).to.be.eql(expected)
    })
    it('should dispatch an action after login', () => {
       	
    })

    it('should do something when login did not succeed')
  })
})
