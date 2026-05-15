<?php
declare(strict_types=1);

// FreeGames SDK utility: result_body

class FreeGamesResultBody
{
    public static function call(FreeGamesContext $ctx): ?FreeGamesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
