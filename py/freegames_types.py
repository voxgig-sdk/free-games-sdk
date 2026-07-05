# Typed models for the FreeGames SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Giveaway(TypedDict, total=False):
    description: str
    end_date: str
    gamerpower_url: str
    id: int
    image: str
    instruction: str
    open_giveaway: str
    open_giveaway_url: str
    platform: str
    published_date: str
    status: str
    thumbnail: str
    title: str
    type: str
    user: int
    worth: str


class GiveawayLoadMatchRequired(TypedDict):
    id: int


class GiveawayLoadMatch(GiveawayLoadMatchRequired, total=False):
    description: str
    end_date: str
    gamerpower_url: str
    image: str
    instruction: str
    open_giveaway: str
    open_giveaway_url: str
    platform: str
    published_date: str
    status: str
    thumbnail: str
    title: str
    type: str
    user: int
    worth: str


class GiveawayListMatch(TypedDict, total=False):
    description: str
    end_date: str
    gamerpower_url: str
    id: int
    image: str
    instruction: str
    open_giveaway: str
    open_giveaway_url: str
    platform: str
    published_date: str
    status: str
    thumbnail: str
    title: str
    type: str
    user: int
    worth: str


class Worth(TypedDict, total=False):
    active_giveaways_number: int
    worth_estimation_usd: str


class WorthLoadMatch(TypedDict, total=False):
    active_giveaways_number: int
    worth_estimation_usd: str
