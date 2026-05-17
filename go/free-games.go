package voxgigfreegamessdk

import (
	"github.com/voxgig-sdk/free-games-sdk/go/core"
	"github.com/voxgig-sdk/free-games-sdk/go/entity"
	"github.com/voxgig-sdk/free-games-sdk/go/feature"
	_ "github.com/voxgig-sdk/free-games-sdk/go/utility"
)

// Type aliases preserve external API.
type FreeGamesSDK = core.FreeGamesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FreeGamesEntity = core.FreeGamesEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FreeGamesError = core.FreeGamesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGiveawayEntityFunc = func(client *core.FreeGamesSDK, entopts map[string]any) core.FreeGamesEntity {
		return entity.NewGiveawayEntity(client, entopts)
	}
	core.NewWorthEntityFunc = func(client *core.FreeGamesSDK, entopts map[string]any) core.FreeGamesEntity {
		return entity.NewWorthEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFreeGamesSDK = core.NewFreeGamesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
