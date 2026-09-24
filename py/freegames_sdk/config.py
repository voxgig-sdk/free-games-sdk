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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed description of the giveaway",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": "`$STRING`",
            "short": "Date and time when the giveaway ends",
          },
          {
            "name": "gamerpower_url",
            "title": "Gamerpower Url",
            "type": "`$STRING`",
            "short": "URL to the giveaway page on GamerPower",
            "format": "uri",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the giveaway",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "short": "URL to the full-size image",
            "format": "uri",
          },
          {
            "name": "instructions",
            "title": "Instructions",
            "type": "`$STRING`",
            "short": "Instructions on how to claim the giveaway",
          },
          {
            "name": "open_giveaway",
            "title": "Open Giveaway",
            "type": "`$STRING`",
            "short": "Direct URL to claim the giveaway",
            "format": "uri",
          },
          {
            "name": "open_giveaway_url",
            "title": "Open Giveaway Url",
            "type": "`$STRING`",
            "short": "URL to open and claim the giveaway",
            "format": "uri",
          },
          {
            "name": "platforms",
            "title": "Platforms",
            "type": "`$STRING`",
            "short": "Platforms on which the giveaway is available",
          },
          {
            "name": "published_date",
            "title": "Published Date",
            "type": "`$STRING`",
            "short": "Date and time when the giveaway was published",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the giveaway",
          },
          {
            "name": "thumbnail",
            "title": "Thumbnail",
            "type": "`$STRING`",
            "short": "URL to the thumbnail image",
            "format": "uri",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Title of the giveaway",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type of giveaway (e.g., Game, Loot, Beta)",
          },
          {
            "name": "users",
            "title": "Users",
            "type": "`$INTEGER`",
            "short": "Number of users participating in the giveaway",
          },
          {
            "name": "worth",
            "title": "Worth",
            "type": "`$STRING`",
            "short": "Monetary value of the giveaway",
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
                "kind": "http",
                "method": "GET",
                "orig": "/giveaways",
                "segments": [
                  {
                    "lit": "giveaways",
                  },
                ],
                "parts": [
                  "giveaways",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "sort_by",
                      "orig": "sort_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "platform",
                    "sort_by",
                    "type",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/filter",
                "segments": [
                  {
                    "lit": "filter",
                  },
                ],
                "parts": [
                  "filter",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "platform",
                    "type",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/giveaway",
                "segments": [
                  {
                    "lit": "giveaway",
                  },
                ],
                "parts": [
                  "giveaway",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
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
            "title": "Active Giveaways Number",
            "type": "`$INTEGER`",
            "short": "Number of active giveaways",
          },
          {
            "name": "worth_estimation_usd",
            "title": "Worth Estimation Usd",
            "type": "`$STRING`",
            "short": "Total estimated worth in USD",
          },
        ],
        "name": "worth",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/worth",
                "segments": [
                  {
                    "lit": "worth",
                  },
                ],
                "parts": [
                  "worth",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "platform",
                    "type",
                  ],
                },
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
