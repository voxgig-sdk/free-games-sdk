# FreeGames SDK configuration

module FreeGamesConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "FreeGames",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://www.gamerpower.com/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "giveaway" => {},
          "worth" => {},
        },
      },
      "entity" => {
        "giveaway" => {
          "fields" => [
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "end_date",
              "type" => "`$STRING`",
            },
            {
              "name" => "gamerpower_url",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "image",
              "type" => "`$STRING`",
            },
            {
              "name" => "instructions",
              "type" => "`$STRING`",
            },
            {
              "name" => "open_giveaway",
              "type" => "`$STRING`",
            },
            {
              "name" => "open_giveaway_url",
              "type" => "`$STRING`",
            },
            {
              "name" => "platforms",
              "type" => "`$STRING`",
            },
            {
              "name" => "published_date",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "type" => "`$STRING`",
            },
            {
              "name" => "thumbnail",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
            {
              "name" => "users",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "worth",
              "type" => "`$STRING`",
            },
          ],
          "name" => "giveaway",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "platform",
                        "orig" => "platform",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort_by",
                        "orig" => "sort_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/giveaways",
                  "parts" => [
                    "giveaways",
                  ],
                  "select" => {
                    "exist" => [
                      "platform",
                      "sort_by",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "platform",
                        "orig" => "platform",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/filter",
                  "parts" => [
                    "filter",
                  ],
                  "select" => {
                    "exist" => [
                      "platform",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/giveaway",
                  "parts" => [
                    "giveaway",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "worth" => {
          "fields" => [
            {
              "name" => "active_giveaways_number",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "worth_estimation_usd",
              "type" => "`$STRING`",
            },
          ],
          "name" => "worth",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "platform",
                        "orig" => "platform",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/worth",
                  "parts" => [
                    "worth",
                  ],
                  "select" => {
                    "exist" => [
                      "platform",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FreeGamesFeatures.make_feature(name)
  end
end
