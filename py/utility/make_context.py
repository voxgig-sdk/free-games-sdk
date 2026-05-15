# FreeGames SDK utility: make_context

from core.context import FreeGamesContext


def make_context_util(ctxmap, basectx):
    return FreeGamesContext(ctxmap, basectx)
