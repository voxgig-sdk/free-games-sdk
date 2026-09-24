
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeGamesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FreeGamesSDK.test()
    equal(testsdk instanceof FreeGamesSDK, true,
      'FreeGamesSDK.test() must return a client synchronously')
  })

})
