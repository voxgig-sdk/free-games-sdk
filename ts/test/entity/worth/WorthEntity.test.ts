

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FreeGamesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('WorthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREE_GAMES_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREE_GAMES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreeGamesSDK.test()
    const ent = testsdk.Worth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_GAMES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'worth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_giveaways_number":{"a":true,"h":"Active Giveaways Number","n":"active_giveaways_number","r":false,"sh":"Number of active giveaways","t":"`$INTEGER`","key$":"active_giveaways_number","index$":0},"worth_estimation_usd":{"a":true,"h":"Worth Estimation Usd","n":"worth_estimation_usd","r":false,"sh":"Total estimated worth in USD","t":"`$STRING`","key$":"worth_estimation_usd","index$":1}},"name":"worth","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /worth","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"platform","or":"platform","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/worth","q":{"exist":["platform","type"]},"r":{},"s":[{"lit":"worth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"worth","name__orig":"worth","Name":"Worth","name_":"worth","name-":"worth","NAME":"WORTH","index$":1}, {"active":true,"entity":"worth","key$":"BasicWorthFlow","kind":"basic","name":"BasicWorthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"worth_ref01","srcdatavar":"worth_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-worth_ref01"}}],"index$":0}]}, 'Worth', {"GET /worth":{"protocol":"http","operationId":"getTotalWorth","responses":{"200":{"description":"Successful response with total worth information","content":{"application/json":{"schema":{"type":"object","properties":{"worth_estimation_usd":{"description":"Total estimated worth in USD","key$":"worth_estimation_usd","type":"string"},"active_giveaways_number":{"description":"Number of active giveaways","key$":"active_giveaways_number","type":"integer"}},"x-ref":"#/components/schemas/Worth","index$":0}}}}},"parameters":[{"name":"platform","in":"query","description":"Filter total worth by platform","required":false,"schema":{"type":"string"},"index$":0},{"name":"type","in":"query","description":"Filter total worth by type","required":false,"schema":{"type":"string"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let worth_ref01_data = Object.values(setup.data.existing.worth)[0] as any

    // LOAD
    const worth_ref01_ent = client.Worth()
    const worth_ref01_match_dt0: any = {}
    const worth_ref01_data_dt0 = (await worth_ref01_ent.load(worth_ref01_match_dt0)).data()
    assert(null != worth_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/worth/WorthTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FreeGamesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['worth01','worth02','worth03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREE_GAMES_TEST_WORTH_ENTID': idmap,
    'FREE_GAMES_TEST_LIVE': 'FALSE',
    'FREE_GAMES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREE_GAMES_TEST_WORTH_ENTID']

  const live = 'TRUE' === env.FREE_GAMES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREE_GAMES_TEST_WORTH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FreeGamesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FREE_GAMES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
