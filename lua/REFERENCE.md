# FreeGames Lua SDK Reference

Complete API reference for the FreeGames Lua SDK.


## FreeGamesSDK

### Constructor

```lua
local sdk = require("free-games_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Giveaway(data)`

Create a new `Giveaway` entity instance. Pass `nil` for no initial data.

#### `Worth(data)`

Create a new `Worth` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## GiveawayEntity

```lua
local giveaway = client:Giveaway(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Giveaway():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Giveaway():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GiveawayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorthEntity

```lua
local worth = client:Worth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_giveaways_number` | `number` | No | Number of active giveaways |
| `worth_estimation_usd` | `string` | No | Total estimated worth in USD |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Worth():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

