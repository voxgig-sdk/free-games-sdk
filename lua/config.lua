-- FreeGames SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FreeGames",
      slug = "free-games",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://www.gamerpower.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["giveaway"] = {},
        ["worth"] = {},
      },
    },
    entity = {
      ["giveaway"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Detailed description of the giveaway",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "end_date",
            ["short"] = "Date and time when the giveaway ends",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gamerpower_url",
            ["short"] = "URL to the giveaway page on GamerPower",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the giveaway",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to the full-size image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "instructions",
            ["short"] = "Instructions on how to claim the giveaway",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "open_giveaway",
            ["short"] = "Direct URL to claim the giveaway",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "open_giveaway_url",
            ["short"] = "URL to open and claim the giveaway",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "platforms",
            ["short"] = "Platforms on which the giveaway is available",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "published_date",
            ["short"] = "Date and time when the giveaway was published",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Current status of the giveaway",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "thumbnail",
            ["short"] = "URL to the thumbnail image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Title of the giveaway",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Type of giveaway (e.g., Game, Loot, Beta)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "users",
            ["short"] = "Number of users participating in the giveaway",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "worth",
            ["short"] = "Monetary value of the giveaway",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "giveaway",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "platform",
                      ["orig"] = "platform",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort_by",
                      ["orig"] = "sort_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/giveaways",
                ["parts"] = {
                  "giveaways",
                },
                ["select"] = {
                  ["exist"] = {
                    "platform",
                    "sort_by",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "platform",
                      ["orig"] = "platform",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/filter",
                ["parts"] = {
                  "filter",
                },
                ["select"] = {
                  ["exist"] = {
                    "platform",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/giveaway",
                ["parts"] = {
                  "giveaway",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["worth"] = {
        ["fields"] = {
          {
            ["name"] = "active_giveaways_number",
            ["short"] = "Number of active giveaways",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "worth_estimation_usd",
            ["short"] = "Total estimated worth in USD",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "worth",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "platform",
                      ["orig"] = "platform",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/worth",
                ["parts"] = {
                  "worth",
                },
                ["select"] = {
                  ["exist"] = {
                    "platform",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
