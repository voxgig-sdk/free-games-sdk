

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GiveawayEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREE_GAMES_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREE_GAMES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreeGamesSDK.test()
    const ent = testsdk.Giveaway()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_GAMES_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'giveaway.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Detailed description of the giveaway","type":"`$STRING`","index$":0},{"active":true,"name":"end_date","req":false,"short":"Date and time when the giveaway ends","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"gamerpower_url","req":false,"short":"URL to the giveaway page on GamerPower","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"short":"Unique identifier for the giveaway","type":"`$INTEGER`","index$":3},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to the full-size image","type":"`$STRING`","index$":4},{"active":true,"name":"instructions","req":false,"short":"Instructions on how to claim the giveaway","type":"`$STRING`","index$":5},{"active":true,"format":"uri","name":"open_giveaway","req":false,"short":"Direct URL to claim the giveaway","type":"`$STRING`","index$":6},{"active":true,"format":"uri","name":"open_giveaway_url","req":false,"short":"URL to open and claim the giveaway","type":"`$STRING`","index$":7},{"active":true,"name":"platforms","req":false,"short":"Platforms on which the giveaway is available","type":"`$STRING`","index$":8},{"active":true,"name":"published_date","req":false,"short":"Date and time when the giveaway was published","type":"`$STRING`","index$":9},{"active":true,"name":"status","req":false,"short":"Current status of the giveaway","type":"`$STRING`","index$":10},{"active":true,"format":"uri","name":"thumbnail","req":false,"short":"URL to the thumbnail image","type":"`$STRING`","index$":11},{"active":true,"name":"title","req":false,"short":"Title of the giveaway","type":"`$STRING`","index$":12},{"active":true,"name":"type","req":false,"short":"Type of giveaway (e.g., Game, Loot, Beta)","type":"`$STRING`","index$":13},{"active":true,"name":"users","req":false,"short":"Number of users participating in the giveaway","type":"`$INTEGER`","index$":14},{"active":true,"name":"worth","req":false,"short":"Monetary value of the giveaway","type":"`$STRING`","index$":15}],"id":{"field":"id","name":"id"},"name":"giveaway","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"platform","orig":"platform","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"sort_by","orig":"sort_by","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /giveaways","json":"{\"operationId\":\"getAllGiveaways\",\"parameters\":[{\"description\":\"Filter giveaways by platform (e.g., pc, steam, epic-games-store, android, ios, ps4, ps5, xbox-one, xbox-series-xs, switch, vr)\",\"in\":\"query\",\"name\":\"platform\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter giveaways by type (e.g., game, loot, beta)\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sort giveaways by criteria (e.g., date, value, popularity)\",\"in\":\"query\",\"name\":\"sort-by\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"description\":\"Get this amazing game for free for a limited time!\",\"end_date\":\"2023-12-15 23:59:00\",\"gamerpower_url\":\"https://www.gamerpower.com/giveaway/1234\",\"id\":1234,\"image\":\"https://www.gamerpower.com/offers/1/example-large.jpg\",\"instructions\":\"1. Click the button to visit the giveaway page. 2. Follow instructions to claim.\",\"open_giveaway\":\"https://www.example.com/giveaway\",\"open_giveaway_url\":\"https://www.gamerpower.com/open/1234\",\"platforms\":\"PC, Steam\",\"published_date\":\"2023-11-15 12:00:00\",\"status\":\"Active\",\"thumbnail\":\"https://www.gamerpower.com/offers/1/example.jpg\",\"title\":\"Free Game Giveaway\",\"type\":\"Game\",\"users\":5000,\"worth\":\"$19.99\"}],\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the giveaway\",\"type\":\"string\"},\"end_date\":{\"description\":\"Date and time when the giveaway ends\",\"type\":\"string\"},\"gamerpower_url\":{\"description\":\"URL to the giveaway page on GamerPower\",\"format\":\"uri\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the giveaway\",\"type\":\"integer\"},\"image\":{\"description\":\"URL to the full-size image\",\"format\":\"uri\",\"type\":\"string\"},\"instructions\":{\"description\":\"Instructions on how to claim the giveaway\",\"type\":\"string\"},\"open_giveaway\":{\"description\":\"Direct URL to claim the giveaway\",\"format\":\"uri\",\"type\":\"string\"},\"open_giveaway_url\":{\"description\":\"URL to open and claim the giveaway\",\"format\":\"uri\",\"type\":\"string\"},\"platforms\":{\"description\":\"Platforms on which the giveaway is available\",\"type\":\"string\"},\"published_date\":{\"description\":\"Date and time when the giveaway was published\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the giveaway\",\"type\":\"string\"},\"thumbnail\":{\"description\":\"URL to the thumbnail image\",\"format\":\"uri\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the giveaway\",\"type\":\"string\"},\"type\":{\"description\":\"Type of giveaway (e.g., Game, Loot, Beta)\",\"type\":\"string\"},\"users\":{\"description\":\"Number of users participating in the giveaway\",\"type\":\"integer\"},\"worth\":{\"description\":\"Monetary value of the giveaway\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of giveaways\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"No giveaways found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/giveaways","segments":[{"lit":"giveaways"}],"select":{"exist":["platform","sort_by","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"platform","orig":"platform","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /filter","json":"{\"operationId\":\"filterGiveaways\",\"parameters\":[{\"description\":\"Platform to filter by\",\"in\":\"query\",\"name\":\"platform\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Type of giveaway to filter by\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the giveaway\",\"type\":\"string\"},\"end_date\":{\"description\":\"Date and time when the giveaway ends\",\"type\":\"string\"},\"gamerpower_url\":{\"description\":\"URL to the giveaway page on GamerPower\",\"format\":\"uri\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the giveaway\",\"type\":\"integer\"},\"image\":{\"description\":\"URL to the full-size image\",\"format\":\"uri\",\"type\":\"string\"},\"instructions\":{\"description\":\"Instructions on how to claim the giveaway\",\"type\":\"string\"},\"open_giveaway\":{\"description\":\"Direct URL to claim the giveaway\",\"format\":\"uri\",\"type\":\"string\"},\"open_giveaway_url\":{\"description\":\"URL to open and claim the giveaway\",\"format\":\"uri\",\"type\":\"string\"},\"platforms\":{\"description\":\"Platforms on which the giveaway is available\",\"type\":\"string\"},\"published_date\":{\"description\":\"Date and time when the giveaway was published\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the giveaway\",\"type\":\"string\"},\"thumbnail\":{\"description\":\"URL to the thumbnail image\",\"format\":\"uri\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the giveaway\",\"type\":\"string\"},\"type\":{\"description\":\"Type of giveaway (e.g., Game, Loot, Beta)\",\"type\":\"string\"},\"users\":{\"description\":\"Number of users participating in the giveaway\",\"type\":\"integer\"},\"worth\":{\"description\":\"Monetary value of the giveaway\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with filtered giveaways\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/filter","segments":[{"lit":"filter"}],"select":{"exist":["platform","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /giveaway","json":"{\"operationId\":\"getGiveawayById\",\"parameters\":[{\"description\":\"The unique identifier of the giveaway\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"Detailed description of the giveaway\",\"type\":\"string\"},\"end_date\":{\"description\":\"Date and time when the giveaway ends\",\"type\":\"string\"},\"gamerpower_url\":{\"description\":\"URL to the giveaway page on GamerPower\",\"format\":\"uri\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the giveaway\",\"type\":\"integer\"},\"image\":{\"description\":\"URL to the full-size image\",\"format\":\"uri\",\"type\":\"string\"},\"instructions\":{\"description\":\"Instructions on how to claim the giveaway\",\"type\":\"string\"},\"open_giveaway\":{\"description\":\"Direct URL to claim the giveaway\",\"format\":\"uri\",\"type\":\"string\"},\"open_giveaway_url\":{\"description\":\"URL to open and claim the giveaway\",\"format\":\"uri\",\"type\":\"string\"},\"platforms\":{\"description\":\"Platforms on which the giveaway is available\",\"type\":\"string\"},\"published_date\":{\"description\":\"Date and time when the giveaway was published\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the giveaway\",\"type\":\"string\"},\"thumbnail\":{\"description\":\"URL to the thumbnail image\",\"format\":\"uri\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the giveaway\",\"type\":\"string\"},\"type\":{\"description\":\"Type of giveaway (e.g., Game, Loot, Beta)\",\"type\":\"string\"},\"users\":{\"description\":\"Number of users participating in the giveaway\",\"type\":\"integer\"},\"worth\":{\"description\":\"Monetary value of the giveaway\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with giveaway details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Giveaway not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/giveaway","segments":[{"lit":"giveaway"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"giveaway","name__orig":"giveaway","Name":"Giveaway","name_":"giveaway","name-":"giveaway","NAME":"GIVEAWAY","index$":0}, {"active":true,"entity":"giveaway","key$":"BasicGiveawayFlow","kind":"basic","name":"BasicGiveawayFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"giveaway_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"giveaway_ref01","srcdatavar":"giveaway_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-giveaway_ref01"}}],"index$":1}]}, 'Giveaway')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let giveaway_ref01_data = Object.values(setup.data.existing.giveaway)[0] as any

    // LIST
    const giveaway_ref01_ent = client.Giveaway()
    const giveaway_ref01_match: any = {}

    const giveaway_ref01_list = (await giveaway_ref01_ent.list(giveaway_ref01_match)).map((e: any) => e.data())


    // LOAD
    const giveaway_ref01_match_dt0: any = {}
    giveaway_ref01_match_dt0.id = giveaway_ref01_data.id
    const giveaway_ref01_data_dt0 = (await giveaway_ref01_ent.load(giveaway_ref01_match_dt0)).data()
    assert(giveaway_ref01_data_dt0.id === giveaway_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/giveaway/GiveawayTestData.json')

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
    ['giveaway01','giveaway02','giveaway03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREE_GAMES_TEST_GIVEAWAY_ENTID': idmap,
    'FREE_GAMES_TEST_LIVE': 'FALSE',
    'FREE_GAMES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREE_GAMES_TEST_GIVEAWAY_ENTID']

  const live = 'TRUE' === env.FREE_GAMES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREE_GAMES_TEST_GIVEAWAY_ENTID']
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
  
