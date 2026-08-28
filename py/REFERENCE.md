# FreeGames Python SDK Reference

Complete API reference for the FreeGames Python SDK.


## FreeGamesSDK

### Constructor

```python
from freegames_sdk import FreeGamesSDK

client = FreeGamesSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `FreeGamesSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = FreeGamesSDK.test()
```


### Instance Methods

#### `Giveaway(data=None)`

Create a new `GiveawayEntity` instance. Pass `None` for no initial data.

#### `Worth(data=None)`

Create a new `WorthEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## GiveawayEntity

```python
giveaway = client.Giveaway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | Detailed description of the giveaway |
| `end_date` | `str` | No | Date and time when the giveaway ends |
| `gamerpower_url` | `str` | No | URL to the giveaway page on GamerPower |
| `id` | `int` | No | Unique identifier for the giveaway |
| `image` | `str` | No | URL to the full-size image |
| `instructions` | `str` | No | Instructions on how to claim the giveaway |
| `open_giveaway` | `str` | No | Direct URL to claim the giveaway |
| `open_giveaway_url` | `str` | No | URL to open and claim the giveaway |
| `platforms` | `str` | No | Platforms on which the giveaway is available |
| `published_date` | `str` | No | Date and time when the giveaway was published |
| `status` | `str` | No | Current status of the giveaway |
| `thumbnail` | `str` | No | URL to the thumbnail image |
| `title` | `str` | No | Title of the giveaway |
| `type` | `str` | No | Type of giveaway (e.g., Game, Loot, Beta) |
| `users` | `int` | No | Number of users participating in the giveaway |
| `worth` | `str` | No | Monetary value of the giveaway |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Giveaway().list()
for giveaway in results:
    print(giveaway)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Giveaway().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GiveawayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorthEntity

```python
worth = client.Worth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_giveaways_number` | `int` | No | Number of active giveaways |
| `worth_estimation_usd` | `str` | No | Total estimated worth in USD |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Worth().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = FreeGamesSDK({
    "feature": {
        "test": {"active": True},
    },
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

