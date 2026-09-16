package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewGiveawayEntityFunc func(client *FreeGamesSDK, entopts map[string]any) FreeGamesEntity

var NewWorthEntityFunc func(client *FreeGamesSDK, entopts map[string]any) FreeGamesEntity

