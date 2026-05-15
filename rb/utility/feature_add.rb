# FreeGames SDK utility: feature_add
module FreeGamesUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
