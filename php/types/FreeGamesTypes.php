<?php
declare(strict_types=1);

// Typed models for the FreeGames SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Giveaway entity data model. */
class Giveaway
{
    public ?string $description = null;
    public ?string $end_date = null;
    public ?string $gamerpower_url = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?string $instruction = null;
    public ?string $open_giveaway = null;
    public ?string $open_giveaway_url = null;
    public ?string $platform = null;
    public ?string $published_date = null;
    public ?string $status = null;
    public ?string $thumbnail = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $user = null;
    public ?string $worth = null;
}

/** Request payload for Giveaway#load. */
class GiveawayLoadMatch
{
    public ?string $description = null;
    public ?string $end_date = null;
    public ?string $gamerpower_url = null;
    public int $id;
    public ?string $image = null;
    public ?string $instruction = null;
    public ?string $open_giveaway = null;
    public ?string $open_giveaway_url = null;
    public ?string $platform = null;
    public ?string $published_date = null;
    public ?string $status = null;
    public ?string $thumbnail = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $user = null;
    public ?string $worth = null;
}

/** Request payload for Giveaway#list. */
class GiveawayListMatch
{
    public ?string $description = null;
    public ?string $end_date = null;
    public ?string $gamerpower_url = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?string $instruction = null;
    public ?string $open_giveaway = null;
    public ?string $open_giveaway_url = null;
    public ?string $platform = null;
    public ?string $published_date = null;
    public ?string $status = null;
    public ?string $thumbnail = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?int $user = null;
    public ?string $worth = null;
}

/** Worth entity data model. */
class Worth
{
    public ?int $active_giveaways_number = null;
    public ?string $worth_estimation_usd = null;
}

/** Request payload for Worth#load. */
class WorthLoadMatch
{
    public ?int $active_giveaways_number = null;
    public ?string $worth_estimation_usd = null;
}

