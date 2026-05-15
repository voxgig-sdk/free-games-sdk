<?php
declare(strict_types=1);

// FreeGames SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FreeGamesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FreeGamesBaseFeature();
            case "test":
                return new FreeGamesTestFeature();
            default:
                return new FreeGamesBaseFeature();
        }
    }
}
