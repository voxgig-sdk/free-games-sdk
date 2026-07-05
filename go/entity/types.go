// Typed models for the FreeGames SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Giveaway is the typed data model for the giveaway entity.
type Giveaway struct {
	Description *string `json:"description,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	GamerpowerUrl *string `json:"gamerpower_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Instruction *string `json:"instruction,omitempty"`
	OpenGiveaway *string `json:"open_giveaway,omitempty"`
	OpenGiveawayUrl *string `json:"open_giveaway_url,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	Status *string `json:"status,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	User *int `json:"user,omitempty"`
	Worth *string `json:"worth,omitempty"`
}

// GiveawayLoadMatch is the typed request payload for Giveaway.LoadTyped.
type GiveawayLoadMatch struct {
	Description *string `json:"description,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	GamerpowerUrl *string `json:"gamerpower_url,omitempty"`
	Id int `json:"id"`
	Image *string `json:"image,omitempty"`
	Instruction *string `json:"instruction,omitempty"`
	OpenGiveaway *string `json:"open_giveaway,omitempty"`
	OpenGiveawayUrl *string `json:"open_giveaway_url,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	Status *string `json:"status,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	User *int `json:"user,omitempty"`
	Worth *string `json:"worth,omitempty"`
}

// GiveawayListMatch is the typed request payload for Giveaway.ListTyped.
type GiveawayListMatch struct {
	Description *string `json:"description,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	GamerpowerUrl *string `json:"gamerpower_url,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Instruction *string `json:"instruction,omitempty"`
	OpenGiveaway *string `json:"open_giveaway,omitempty"`
	OpenGiveawayUrl *string `json:"open_giveaway_url,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PublishedDate *string `json:"published_date,omitempty"`
	Status *string `json:"status,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	User *int `json:"user,omitempty"`
	Worth *string `json:"worth,omitempty"`
}

// Worth is the typed data model for the worth entity.
type Worth struct {
	ActiveGiveawaysNumber *int `json:"active_giveaways_number,omitempty"`
	WorthEstimationUsd *string `json:"worth_estimation_usd,omitempty"`
}

// WorthLoadMatch is the typed request payload for Worth.LoadTyped.
type WorthLoadMatch struct {
	ActiveGiveawaysNumber *int `json:"active_giveaways_number,omitempty"`
	WorthEstimationUsd *string `json:"worth_estimation_usd,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
