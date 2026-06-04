# FreeGames SDK

Find current free game giveaways, in-game loot, and beta keys aggregated by GamerPower

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Free Games API

The Free Games API is the public HTTP interface to [GamerPower](https://www.gamerpower.com/), a community-tracked catalogue of free PC and console game giveaways, in-game loot drops, beta keys, and limited-time freebies. The data is curated and refreshed continuously by the GamerPower team.

What you get from the API:
- A live feed of ongoing giveaways with titles, descriptions, images, and links to claim them
- Filtering by platform (PC, Steam, Epic Games Store, PlayStation, Xbox, etc.) and giveaway type (game, loot, beta)
- Estimated monetary worth of active giveaways, useful for aggregate value summaries

The API responds to plain HTTP GET requests and returns JSON; no API key is required. Because CORS is enabled, it is suitable for direct use from browser-side code as well as servers.

## Try it

**TypeScript**
```bash
npm install free-games
```

**Python**
```bash
pip install free-games-sdk
```

**PHP**
```bash
composer require voxgig/free-games-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/free-games-sdk/go
```

**Ruby**
```bash
gem install free-games-sdk
```

**Lua**
```bash
luarocks install free-games-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FreeGamesSDK } from 'free-games'

const client = new FreeGamesSDK({})

// List all giveaways
const giveaways = await client.Giveaway().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o free-games-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "free-games": {
      "command": "/abs/path/to/free-games-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Giveaway** | An individual free-game, loot, or beta-key promotion tracked by GamerPower, typically served from `GET /giveaways`. | `/giveaways` |
| **Worth** | Aggregate monetary-value summary of currently active giveaways, useful for showing the total "worth" of free items available. | `/worth` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from freegames_sdk import FreeGamesSDK

client = FreeGamesSDK({})

# List all giveaways
giveaways, err = client.Giveaway(None).list(None, None)

# Load a specific giveaway
giveaway, err = client.Giveaway(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'freegames_sdk.php';

$client = new FreeGamesSDK([]);

// List all giveaways
[$giveaways, $err] = $client->Giveaway(null)->list(null, null);

// Load a specific giveaway
[$giveaway, $err] = $client->Giveaway(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/free-games-sdk/go"

client := sdk.NewFreeGamesSDK(map[string]any{})

// List all giveaways
giveaways, err := client.Giveaway(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FreeGames_sdk"

client = FreeGamesSDK.new({})

# List all giveaways
giveaways, err = client.Giveaway(nil).list(nil, nil)

# Load a specific giveaway
giveaway, err = client.Giveaway(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("free-games_sdk")

local client = sdk.new({})

-- List all giveaways
local giveaways, err = client:Giveaway(nil):list(nil, nil)

-- Load a specific giveaway
local giveaway, err = client:Giveaway(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FreeGamesSDK.test()
const result = await client.Giveaway().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FreeGamesSDK.test(None, None)
result, err = client.Giveaway(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FreeGamesSDK::test(null, null);
[$result, $err] = $client->Giveaway(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Giveaway(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FreeGamesSDK.test(nil, nil)
result, err = client.Giveaway(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Giveaway(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Free Games API

- Upstream: [https://www.gamerpower.com/](https://www.gamerpower.com/)
- API docs: [https://www.gamerpower.com/api-read](https://www.gamerpower.com/api-read)

- No authentication or API key required for public endpoints
- Operated by [GamerPower](https://www.gamerpower.com/); no formal open licence is published
- Attribution to GamerPower is the expected courtesy when redistributing the data
- CORS is enabled, so the API can be called directly from browser clients

---

Generated from the Free Games API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
