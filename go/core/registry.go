package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGiveawayEntityFunc func(client *FreeGamesSDK, entopts map[string]any) FreeGamesEntity

var NewWorthEntityFunc func(client *FreeGamesSDK, entopts map[string]any) FreeGamesEntity

