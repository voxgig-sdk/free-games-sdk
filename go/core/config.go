package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FreeGames",
			"slug": "free-games",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://www.gamerpower.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"giveaway": map[string]any{},
				"worth": map[string]any{},
			},
		},
		"entity": map[string]any{
			"giveaway": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Detailed description of the giveaway",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"short": "Date and time when the giveaway ends",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gamerpower_url",
						"short": "URL to the giveaway page on GamerPower",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the giveaway",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image",
						"short": "URL to the full-size image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "instructions",
						"short": "Instructions on how to claim the giveaway",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "open_giveaway",
						"short": "Direct URL to claim the giveaway",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "open_giveaway_url",
						"short": "URL to open and claim the giveaway",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "platforms",
						"short": "Platforms on which the giveaway is available",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "published_date",
						"short": "Date and time when the giveaway was published",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current status of the giveaway",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "thumbnail",
						"short": "URL to the thumbnail image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Title of the giveaway",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of giveaway (e.g., Game, Loot, Beta)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "users",
						"short": "Number of users participating in the giveaway",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "worth",
						"short": "Monetary value of the giveaway",
						"type": "`$STRING`",
					},
				},
				"name": "giveaway",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/giveaways",
								"parts": []any{
									"giveaways",
								},
								"select": map[string]any{
									"exist": []any{
										"platform",
										"sort_by",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/filter",
								"parts": []any{
									"filter",
								},
								"select": map[string]any{
									"exist": []any{
										"platform",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/giveaway",
								"parts": []any{
									"giveaway",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"worth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_giveaways_number",
						"short": "Number of active giveaways",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "worth_estimation_usd",
						"short": "Total estimated worth in USD",
						"type": "`$STRING`",
					},
				},
				"name": "worth",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/worth",
								"parts": []any{
									"worth",
								},
								"select": map[string]any{
									"exist": []any{
										"platform",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
