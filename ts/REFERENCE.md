# FreeGames TypeScript SDK Reference

Complete API reference for the FreeGames TypeScript SDK.


## FreeGamesSDK

### Constructor

```ts
new FreeGamesSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FreeGamesSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = FreeGamesSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `FreeGamesSDK` instance in test mode.


### Instance Methods

#### `Giveaway(data?: object)`

Create a new `Giveaway` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GiveawayEntity` instance.

#### `Worth(data?: object)`

Create a new `Worth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorthEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `FreeGamesSDK.test()`.

**Returns:** `FreeGamesSDK` instance in test mode.


---

## GiveawayEntity

```ts
const giveaway = client.Giveaway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Detailed description of the giveaway |
| `end_date` | `string` | No | Date and time when the giveaway ends |
| `gamerpower_url` | `string` | No | URL to the giveaway page on GamerPower |
| `id` | `number` | No | Unique identifier for the giveaway |
| `image` | `string` | No | URL to the full-size image |
| `instructions` | `string` | No | Instructions on how to claim the giveaway |
| `open_giveaway` | `string` | No | Direct URL to claim the giveaway |
| `open_giveaway_url` | `string` | No | URL to open and claim the giveaway |
| `platforms` | `string` | No | Platforms on which the giveaway is available |
| `published_date` | `string` | No | Date and time when the giveaway was published |
| `status` | `string` | No | Current status of the giveaway |
| `thumbnail` | `string` | No | URL to the thumbnail image |
| `title` | `string` | No | Title of the giveaway |
| `type` | `string` | No | Type of giveaway (e.g., Game, Loot, Beta) |
| `users` | `number` | No | Number of users participating in the giveaway |
| `worth` | `string` | No | Monetary value of the giveaway |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Giveaway().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Giveaway().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GiveawayEntity` instance with the same client and
options.

#### `client()`

Return the parent `FreeGamesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorthEntity

```ts
const worth = client.Worth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_giveaways_number` | `number` | No | Number of active giveaways |
| `worth_estimation_usd` | `string` | No | Total estimated worth in USD |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Worth().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorthEntity` instance with the same client and
options.

#### `client()`

Return the parent `FreeGamesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new FreeGamesSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

