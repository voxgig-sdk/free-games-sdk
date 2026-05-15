<?php
declare(strict_types=1);

// FreeGames SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FreeGamesMakeContext
{
    public static function call(array $ctxmap, ?FreeGamesContext $basectx): FreeGamesContext
    {
        return new FreeGamesContext($ctxmap, $basectx);
    }
}
