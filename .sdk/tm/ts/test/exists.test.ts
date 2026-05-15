
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeGamesSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FreeGamesSDK.test()
    equal(null !== testsdk, true)
  })

})
