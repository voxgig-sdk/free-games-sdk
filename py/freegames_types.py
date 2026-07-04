# Typed models for the FreeGames SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Giveaway:
    description: Optional[str] = None
    end_date: Optional[str] = None
    gamerpower_url: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    instruction: Optional[str] = None
    open_giveaway: Optional[str] = None
    open_giveaway_url: Optional[str] = None
    platform: Optional[str] = None
    published_date: Optional[str] = None
    status: Optional[str] = None
    thumbnail: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None
    user: Optional[int] = None
    worth: Optional[str] = None


@dataclass
class GiveawayLoadMatch:
    description: Optional[str] = None
    end_date: Optional[str] = None
    gamerpower_url: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    instruction: Optional[str] = None
    open_giveaway: Optional[str] = None
    open_giveaway_url: Optional[str] = None
    platform: Optional[str] = None
    published_date: Optional[str] = None
    status: Optional[str] = None
    thumbnail: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None
    user: Optional[int] = None
    worth: Optional[str] = None


@dataclass
class GiveawayListMatch:
    description: Optional[str] = None
    end_date: Optional[str] = None
    gamerpower_url: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    instruction: Optional[str] = None
    open_giveaway: Optional[str] = None
    open_giveaway_url: Optional[str] = None
    platform: Optional[str] = None
    published_date: Optional[str] = None
    status: Optional[str] = None
    thumbnail: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None
    user: Optional[int] = None
    worth: Optional[str] = None


@dataclass
class Worth:
    active_giveaways_number: Optional[int] = None
    worth_estimation_usd: Optional[str] = None


@dataclass
class WorthLoadMatch:
    active_giveaways_number: Optional[int] = None
    worth_estimation_usd: Optional[str] = None

