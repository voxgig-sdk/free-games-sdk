<?php
declare(strict_types=1);

// FreeGames SDK utility: prepare_body

class FreeGamesPrepareBody
{
    public static function call(FreeGamesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
