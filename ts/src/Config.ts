
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FreeGames',
        slug: "free-games",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.gamerpower.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        giveaway: {
        },
  
        worth: {
        },
  
    }
  }


  entity = {
    "giveaway": {
      "fields": [
        {
          "name": "description",
          "short": "Detailed description of the giveaway",
          "type": "`$STRING`"
        },
        {
          "name": "end_date",
          "short": "Date and time when the giveaway ends",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "gamerpower_url",
          "short": "URL to the giveaway page on GamerPower",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the giveaway",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "image",
          "short": "URL to the full-size image",
          "type": "`$STRING`"
        },
        {
          "name": "instructions",
          "short": "Instructions on how to claim the giveaway",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "open_giveaway",
          "short": "Direct URL to claim the giveaway",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "open_giveaway_url",
          "short": "URL to open and claim the giveaway",
          "type": "`$STRING`"
        },
        {
          "name": "platforms",
          "short": "Platforms on which the giveaway is available",
          "type": "`$STRING`"
        },
        {
          "name": "published_date",
          "short": "Date and time when the giveaway was published",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Current status of the giveaway",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "thumbnail",
          "short": "URL to the thumbnail image",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the giveaway",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of giveaway (e.g., Game, Loot, Beta)",
          "type": "`$STRING`"
        },
        {
          "name": "users",
          "short": "Number of users participating in the giveaway",
          "type": "`$INTEGER`"
        },
        {
          "name": "worth",
          "short": "Monetary value of the giveaway",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sort_by",
                    "orig": "sort_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/giveaways",
              "segments": [
                {
                  "lit": "giveaways"
                }
              ],
              "select": {
                "exist": [
                  "platform",
                  "sort_by",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "giveaways"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "platform",
                    "orig": "platform",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/filter",
              "segments": [
                {
                  "lit": "filter"
                }
              ],
              "select": {
                "exist": [
                  "platform",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "filter"
              ]
            }
          ]
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/giveaway",
              "segments": [
                {
                  "lit": "giveaway"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "giveaway"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "worth": {
      "fields": [
        {
          "name": "active_giveaways_number",
          "short": "Number of active giveaways",
          "type": "`$INTEGER`"
        },
        {
          "name": "worth_estimation_usd",
          "short": "Total estimated worth in USD",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/worth",
              "segments": [
                {
                  "lit": "worth"
                }
              ],
              "select": {
                "exist": [
                  "platform",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "worth"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

