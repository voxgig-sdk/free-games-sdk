# FreeGames SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FreeGames",
            "slug": "free-games",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://www.gamerpower.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "giveaway": {},
                "worth": {},
            },
        },
        "entity": {
      "giveaway": {
        "fields": [
          {
            "name": "description",
            "short": "Detailed description of the giveaway",
            "type": "`$STRING`",
          },
          {
            "name": "end_date",
            "short": "Date and time when the giveaway ends",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "gamerpower_url",
            "short": "URL to the giveaway page on GamerPower",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the giveaway",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "image",
            "short": "URL to the full-size image",
            "type": "`$STRING`",
          },
          {
            "name": "instructions",
            "short": "Instructions on how to claim the giveaway",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "open_giveaway",
            "short": "Direct URL to claim the giveaway",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "open_giveaway_url",
            "short": "URL to open and claim the giveaway",
            "type": "`$STRING`",
          },
          {
            "name": "platforms",
            "short": "Platforms on which the giveaway is available",
            "type": "`$STRING`",
          },
          {
            "name": "published_date",
            "short": "Date and time when the giveaway was published",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the giveaway",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "thumbnail",
            "short": "URL to the thumbnail image",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Title of the giveaway",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of giveaway (e.g., Game, Loot, Beta)",
            "type": "`$STRING`",
          },
          {
            "name": "users",
            "short": "Number of users participating in the giveaway",
            "type": "`$INTEGER`",
          },
          {
            "name": "worth",
            "short": "Monetary value of the giveaway",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "giveaway",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort_by",
                      "orig": "sort_by",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/giveaways",
                "segments": [
                  {
                    "lit": "giveaways",
                  },
                ],
                "select": {
                  "exist": [
                    "platform",
                    "sort_by",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "giveaways",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/filter",
                "segments": [
                  {
                    "lit": "filter",
                  },
                ],
                "select": {
                  "exist": [
                    "platform",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "filter",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/giveaway",
                "segments": [
                  {
                    "lit": "giveaway",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "giveaway",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "worth": {
        "fields": [
          {
            "name": "active_giveaways_number",
            "short": "Number of active giveaways",
            "type": "`$INTEGER`",
          },
          {
            "name": "worth_estimation_usd",
            "short": "Total estimated worth in USD",
            "type": "`$STRING`",
          },
        ],
        "name": "worth",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/worth",
                "segments": [
                  {
                    "lit": "worth",
                  },
                ],
                "select": {
                  "exist": [
                    "platform",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "worth",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
