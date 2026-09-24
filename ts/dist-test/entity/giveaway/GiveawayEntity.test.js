"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GiveawayEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FREE_GAMES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FREE_GAMES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FreeGamesSDK.test();
        const ent = testsdk.Giveaway();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FREE_GAMES_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'giveaway.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Detailed description of the giveaway", "t": "`$STRING`", "key$": "description", "index$": 0 }, "end_date": { "a": true, "h": "End Date", "n": "end_date", "r": false, "sh": "Date and time when the giveaway ends", "t": "`$STRING`", "key$": "end_date", "index$": 1 }, "gamerpower_url": { "a": true, "fo": "uri", "h": "Gamerpower Url", "n": "gamerpower_url", "r": false, "sh": "URL to the giveaway page on GamerPower", "t": "`$STRING`", "key$": "gamerpower_url", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the giveaway", "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "image": { "a": true, "fo": "uri", "h": "Image", "n": "image", "r": false, "sh": "URL to the full-size image", "t": "`$STRING`", "key$": "image", "index$": 4 }, "instructions": { "a": true, "h": "Instructions", "n": "instructions", "r": false, "sh": "Instructions on how to claim the giveaway", "t": "`$STRING`", "key$": "instructions", "index$": 5 }, "open_giveaway": { "a": true, "fo": "uri", "h": "Open Giveaway", "n": "open_giveaway", "r": false, "sh": "Direct URL to claim the giveaway", "t": "`$STRING`", "key$": "open_giveaway", "index$": 6 }, "open_giveaway_url": { "a": true, "fo": "uri", "h": "Open Giveaway Url", "n": "open_giveaway_url", "r": false, "sh": "URL to open and claim the giveaway", "t": "`$STRING`", "key$": "open_giveaway_url", "index$": 7 }, "platforms": { "a": true, "h": "Platforms", "n": "platforms", "r": false, "sh": "Platforms on which the giveaway is available", "t": "`$STRING`", "key$": "platforms", "index$": 8 }, "published_date": { "a": true, "h": "Published Date", "n": "published_date", "r": false, "sh": "Date and time when the giveaway was published", "t": "`$STRING`", "key$": "published_date", "index$": 9 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Current status of the giveaway", "t": "`$STRING`", "key$": "status", "index$": 10 }, "thumbnail": { "a": true, "fo": "uri", "h": "Thumbnail", "n": "thumbnail", "r": false, "sh": "URL to the thumbnail image", "t": "`$STRING`", "key$": "thumbnail", "index$": 11 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Title of the giveaway", "t": "`$STRING`", "key$": "title", "index$": 12 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Type of giveaway (e.g., Game, Loot, Beta)", "t": "`$STRING`", "key$": "type", "index$": 13 }, "users": { "a": true, "h": "Users", "n": "users", "r": false, "sh": "Number of users participating in the giveaway", "t": "`$INTEGER`", "key$": "users", "index$": 14 }, "worth": { "a": true, "h": "Worth", "n": "worth", "r": false, "sh": "Monetary value of the giveaway", "t": "`$STRING`", "key$": "worth", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "giveaway", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /giveaways", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "platform", "or": "platform", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/giveaways", "q": { "exist": ["platform", "sort_by", "type"] }, "r": {}, "s": [{ "lit": "giveaways" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /filter", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "platform", "or": "platform", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/filter", "q": { "exist": ["platform", "type"] }, "r": {}, "s": [{ "lit": "filter" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /giveaway", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/giveaway", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "giveaway" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "giveaway", "name__orig": "giveaway", "Name": "Giveaway", "name_": "giveaway", "name-": "giveaway", "NAME": "GIVEAWAY", "index$": 0 }, { "active": true, "entity": "giveaway", "key$": "BasicGiveawayFlow", "kind": "basic", "name": "BasicGiveawayFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "giveaway_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "giveaway_ref01", "srcdatavar": "giveaway_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-giveaway_ref01" } }], "index$": 1 }] }, 'Giveaway', { "GET /giveaways": { "protocol": "http", "operationId": "getAllGiveaways", "responses": { "200": { "description": "Successful response with list of giveaways", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "description": "Unique identifier for the giveaway", "key$": "id", "type": "integer" }, "title": { "description": "Title of the giveaway", "key$": "title", "type": "string" }, "worth": { "description": "Monetary value of the giveaway", "key$": "worth", "type": "string" }, "thumbnail": { "description": "URL to the thumbnail image", "format": "uri", "key$": "thumbnail", "type": "string" }, "image": { "description": "URL to the full-size image", "format": "uri", "key$": "image", "type": "string" }, "description": { "description": "Detailed description of the giveaway", "key$": "description", "type": "string" }, "instructions": { "description": "Instructions on how to claim the giveaway", "key$": "instructions", "type": "string" }, "open_giveaway_url": { "description": "URL to open and claim the giveaway", "format": "uri", "key$": "open_giveaway_url", "type": "string" }, "published_date": { "description": "Date and time when the giveaway was published", "key$": "published_date", "type": "string" }, "type": { "description": "Type of giveaway (e.g., Game, Loot, Beta)", "key$": "type", "type": "string" }, "platforms": { "description": "Platforms on which the giveaway is available", "key$": "platforms", "type": "string" }, "end_date": { "description": "Date and time when the giveaway ends", "key$": "end_date", "type": "string" }, "users": { "description": "Number of users participating in the giveaway", "key$": "users", "type": "integer" }, "status": { "description": "Current status of the giveaway", "key$": "status", "type": "string" }, "gamerpower_url": { "description": "URL to the giveaway page on GamerPower", "format": "uri", "key$": "gamerpower_url", "type": "string" }, "open_giveaway": { "description": "Direct URL to claim the giveaway", "format": "uri", "key$": "open_giveaway", "type": "string" } }, "x-ref": "#/components/schemas/Giveaway", "index$": 0 } }, "example": [{ "id": 1234, "title": "Free Game Giveaway", "worth": "$19.99", "thumbnail": "https://www.gamerpower.com/offers/1/example.jpg", "image": "https://www.gamerpower.com/offers/1/example-large.jpg", "description": "Get this amazing game for free for a limited time!", "instructions": "1. Click the button to visit the giveaway page. 2. Follow instructions to claim.", "open_giveaway_url": "https://www.gamerpower.com/open/1234", "published_date": "2023-11-15 12:00:00", "type": "Game", "platforms": "PC, Steam", "end_date": "2023-12-15 23:59:00", "users": 5000, "status": "Active", "gamerpower_url": "https://www.gamerpower.com/giveaway/1234", "open_giveaway": "https://www.example.com/giveaway" }] } } }, "404": { "description": "No giveaways found", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "type": "integer", "description": "HTTP status code" }, "message": { "type": "string", "description": "Error message" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "type": "integer", "description": "HTTP status code" }, "message": { "type": "string", "description": "Error message" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "platform", "in": "query", "description": "Filter giveaways by platform (e.g., pc, steam, epic-games-store, android, ios, ps4, ps5, xbox-one, xbox-series-xs, switch, vr)", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "type", "in": "query", "description": "Filter giveaways by type (e.g., game, loot, beta)", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "sort-by", "in": "query", "description": "Sort giveaways by criteria (e.g., date, value, popularity)", "required": false, "schema": { "type": "string" }, "index$": 2 }], "securitySource": "unspecified" }, "GET /filter": { "protocol": "http", "operationId": "filterGiveaways", "responses": { "200": { "description": "Successful response with filtered giveaways", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "description": "Unique identifier for the giveaway", "key$": "id", "type": "integer" }, "title": { "description": "Title of the giveaway", "key$": "title", "type": "string" }, "worth": { "description": "Monetary value of the giveaway", "key$": "worth", "type": "string" }, "thumbnail": { "description": "URL to the thumbnail image", "format": "uri", "key$": "thumbnail", "type": "string" }, "image": { "description": "URL to the full-size image", "format": "uri", "key$": "image", "type": "string" }, "description": { "description": "Detailed description of the giveaway", "key$": "description", "type": "string" }, "instructions": { "description": "Instructions on how to claim the giveaway", "key$": "instructions", "type": "string" }, "open_giveaway_url": { "description": "URL to open and claim the giveaway", "format": "uri", "key$": "open_giveaway_url", "type": "string" }, "published_date": { "description": "Date and time when the giveaway was published", "key$": "published_date", "type": "string" }, "type": { "description": "Type of giveaway (e.g., Game, Loot, Beta)", "key$": "type", "type": "string" }, "platforms": { "description": "Platforms on which the giveaway is available", "key$": "platforms", "type": "string" }, "end_date": { "description": "Date and time when the giveaway ends", "key$": "end_date", "type": "string" }, "users": { "description": "Number of users participating in the giveaway", "key$": "users", "type": "integer" }, "status": { "description": "Current status of the giveaway", "key$": "status", "type": "string" }, "gamerpower_url": { "description": "URL to the giveaway page on GamerPower", "format": "uri", "key$": "gamerpower_url", "type": "string" }, "open_giveaway": { "description": "Direct URL to claim the giveaway", "format": "uri", "key$": "open_giveaway", "type": "string" } }, "x-ref": "#/components/schemas/Giveaway", "index$": 0 } } } } } }, "parameters": [{ "name": "platform", "in": "query", "description": "Platform to filter by", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "type", "in": "query", "description": "Type of giveaway to filter by", "required": false, "schema": { "type": "string" }, "index$": 1 }], "securitySource": "unspecified" }, "GET /giveaway": { "protocol": "http", "operationId": "getGiveawayById", "responses": { "200": { "description": "Successful response with giveaway details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Unique identifier for the giveaway", "key$": "id", "type": "integer" }, "title": { "description": "Title of the giveaway", "key$": "title", "type": "string" }, "worth": { "description": "Monetary value of the giveaway", "key$": "worth", "type": "string" }, "thumbnail": { "description": "URL to the thumbnail image", "format": "uri", "key$": "thumbnail", "type": "string" }, "image": { "description": "URL to the full-size image", "format": "uri", "key$": "image", "type": "string" }, "description": { "description": "Detailed description of the giveaway", "key$": "description", "type": "string" }, "instructions": { "description": "Instructions on how to claim the giveaway", "key$": "instructions", "type": "string" }, "open_giveaway_url": { "description": "URL to open and claim the giveaway", "format": "uri", "key$": "open_giveaway_url", "type": "string" }, "published_date": { "description": "Date and time when the giveaway was published", "key$": "published_date", "type": "string" }, "type": { "description": "Type of giveaway (e.g., Game, Loot, Beta)", "key$": "type", "type": "string" }, "platforms": { "description": "Platforms on which the giveaway is available", "key$": "platforms", "type": "string" }, "end_date": { "description": "Date and time when the giveaway ends", "key$": "end_date", "type": "string" }, "users": { "description": "Number of users participating in the giveaway", "key$": "users", "type": "integer" }, "status": { "description": "Current status of the giveaway", "key$": "status", "type": "string" }, "gamerpower_url": { "description": "URL to the giveaway page on GamerPower", "format": "uri", "key$": "gamerpower_url", "type": "string" }, "open_giveaway": { "description": "Direct URL to claim the giveaway", "format": "uri", "key$": "open_giveaway", "type": "string" } }, "x-ref": "#/components/schemas/Giveaway", "index$": 0 } } } }, "404": { "description": "Giveaway not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "type": "integer", "description": "HTTP status code" }, "message": { "type": "string", "description": "Error message" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "query", "description": "The unique identifier of the giveaway", "required": true, "schema": { "type": "integer" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let giveaway_ref01_data = Object.values(setup.data.existing.giveaway)[0];
        // LIST
        const giveaway_ref01_ent = client.Giveaway();
        const giveaway_ref01_match = {};
        const giveaway_ref01_list = (await giveaway_ref01_ent.list(giveaway_ref01_match)).map((e) => e.data());
        // LOAD
        const giveaway_ref01_match_dt0 = {};
        giveaway_ref01_match_dt0.id = giveaway_ref01_data.id;
        const giveaway_ref01_data_dt0 = (await giveaway_ref01_ent.load(giveaway_ref01_match_dt0)).data();
        (0, node_assert_1.default)(giveaway_ref01_data_dt0.id === giveaway_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/giveaway/GiveawayTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FreeGamesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['giveaway01', 'giveaway02', 'giveaway03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FREE_GAMES_TEST_GIVEAWAY_ENTID': idmap,
        'FREE_GAMES_TEST_LIVE': 'FALSE',
        'FREE_GAMES_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FREE_GAMES_TEST_GIVEAWAY_ENTID'];
    const live = 'TRUE' === env.FREE_GAMES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FREE_GAMES_TEST_GIVEAWAY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FreeGamesSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=GiveawayEntity.test.js.map