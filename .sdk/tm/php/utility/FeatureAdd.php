<?php
declare(strict_types=1);

// FreeGames SDK utility: feature_add

class FreeGamesFeatureAdd
{
    public static function call(FreeGamesContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
