<?php
declare(strict_types=1);

// FreeGames SDK configuration

class FreeGamesConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FreeGames",
                "slug" => "free-games",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://www.gamerpower.com/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "giveaway" => [],
                    "worth" => [],
                ],
            ],
            "entity" => [
        'giveaway' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Detailed description of the giveaway',
            ],
            [
              'name' => 'end_date',
              'title' => 'End Date',
              'type' => '`$STRING`',
              'short' => 'Date and time when the giveaway ends',
            ],
            [
              'name' => 'gamerpower_url',
              'title' => 'Gamerpower Url',
              'type' => '`$STRING`',
              'short' => 'URL to the giveaway page on GamerPower',
              'format' => 'uri',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'Unique identifier for the giveaway',
            ],
            [
              'name' => 'image',
              'title' => 'Image',
              'type' => '`$STRING`',
              'short' => 'URL to the full-size image',
              'format' => 'uri',
            ],
            [
              'name' => 'instructions',
              'title' => 'Instructions',
              'type' => '`$STRING`',
              'short' => 'Instructions on how to claim the giveaway',
            ],
            [
              'name' => 'open_giveaway',
              'title' => 'Open Giveaway',
              'type' => '`$STRING`',
              'short' => 'Direct URL to claim the giveaway',
              'format' => 'uri',
            ],
            [
              'name' => 'open_giveaway_url',
              'title' => 'Open Giveaway Url',
              'type' => '`$STRING`',
              'short' => 'URL to open and claim the giveaway',
              'format' => 'uri',
            ],
            [
              'name' => 'platforms',
              'title' => 'Platforms',
              'type' => '`$STRING`',
              'short' => 'Platforms on which the giveaway is available',
            ],
            [
              'name' => 'published_date',
              'title' => 'Published Date',
              'type' => '`$STRING`',
              'short' => 'Date and time when the giveaway was published',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Current status of the giveaway',
            ],
            [
              'name' => 'thumbnail',
              'title' => 'Thumbnail',
              'type' => '`$STRING`',
              'short' => 'URL to the thumbnail image',
              'format' => 'uri',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'short' => 'Title of the giveaway',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Type of giveaway (e.g., Game, Loot, Beta)',
            ],
            [
              'name' => 'users',
              'title' => 'Users',
              'type' => '`$INTEGER`',
              'short' => 'Number of users participating in the giveaway',
            ],
            [
              'name' => 'worth',
              'title' => 'Worth',
              'type' => '`$STRING`',
              'short' => 'Monetary value of the giveaway',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'giveaway',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/giveaways',
                  'segments' => [
                    [
                      'lit' => 'giveaways',
                    ],
                  ],
                  'parts' => [
                    'giveaways',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sort_by',
                        'orig' => 'sort_by',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'platform',
                      'sort_by',
                      'type',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/filter',
                  'segments' => [
                    [
                      'lit' => 'filter',
                    ],
                  ],
                  'parts' => [
                    'filter',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'platform',
                      'type',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/giveaway',
                  'segments' => [
                    [
                      'lit' => 'giveaway',
                    ],
                  ],
                  'parts' => [
                    'giveaway',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'worth' => [
          'fields' => [
            [
              'name' => 'active_giveaways_number',
              'title' => 'Active Giveaways Number',
              'type' => '`$INTEGER`',
              'short' => 'Number of active giveaways',
            ],
            [
              'name' => 'worth_estimation_usd',
              'title' => 'Worth Estimation Usd',
              'type' => '`$STRING`',
              'short' => 'Total estimated worth in USD',
            ],
          ],
          'name' => 'worth',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/worth',
                  'segments' => [
                    [
                      'lit' => 'worth',
                    ],
                  ],
                  'parts' => [
                    'worth',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'platform',
                      'type',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FreeGamesFeatures::make_feature($name);
    }
}
