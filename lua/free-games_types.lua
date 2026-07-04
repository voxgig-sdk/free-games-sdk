-- Typed models for the FreeGames SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Giveaway
---@field description? string
---@field end_date? string
---@field gamerpower_url? string
---@field id? number
---@field image? string
---@field instruction? string
---@field open_giveaway? string
---@field open_giveaway_url? string
---@field platform? string
---@field published_date? string
---@field status? string
---@field thumbnail? string
---@field title? string
---@field type? string
---@field user? number
---@field worth? string

---@class GiveawayLoadMatch

---@class GiveawayListMatch

---@class Worth
---@field active_giveaways_number? number
---@field worth_estimation_usd? string

---@class WorthLoadMatch

local M = {}

return M
