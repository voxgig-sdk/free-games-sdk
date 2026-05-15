# FreeGames SDK utility: make_context
require_relative '../core/context'
module FreeGamesUtilities
  MakeContext = ->(ctxmap, basectx) {
    FreeGamesContext.new(ctxmap, basectx)
  }
end
