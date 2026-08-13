# FreeGames SDK utility: make_context

from freegames_sdk.core.context import FreeGamesContext


def make_context_util(ctxmap, basectx):
    return FreeGamesContext(ctxmap, basectx)
