// Typed models for the FreeGames SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Giveaway {
  description?: string
  end_date?: string
  gamerpower_url?: string
  id?: number
  image?: string
  instruction?: string
  open_giveaway?: string
  open_giveaway_url?: string
  platform?: string
  published_date?: string
  status?: string
  thumbnail?: string
  title?: string
  type?: string
  user?: number
  worth?: string
}

export interface GiveawayLoadMatch {
  description?: string
  end_date?: string
  gamerpower_url?: string
  id: number
  image?: string
  instruction?: string
  open_giveaway?: string
  open_giveaway_url?: string
  platform?: string
  published_date?: string
  status?: string
  thumbnail?: string
  title?: string
  type?: string
  user?: number
  worth?: string
}

export interface GiveawayListMatch {
  description?: string
  end_date?: string
  gamerpower_url?: string
  id?: number
  image?: string
  instruction?: string
  open_giveaway?: string
  open_giveaway_url?: string
  platform?: string
  published_date?: string
  status?: string
  thumbnail?: string
  title?: string
  type?: string
  user?: number
  worth?: string
}

export interface Worth {
  active_giveaways_number?: number
  worth_estimation_usd?: string
}

export interface WorthLoadMatch {
  active_giveaways_number?: number
  worth_estimation_usd?: string
}

