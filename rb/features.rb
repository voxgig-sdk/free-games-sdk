# FreeGames SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FreeGamesFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeGamesBaseFeature.new
    when "ratelimit"
      FreeGamesRatelimitFeature.new
    when "retry"
      FreeGamesRetryFeature.new
    when "test"
      FreeGamesTestFeature.new
    when "timeout"
      FreeGamesTimeoutFeature.new
    else
      FreeGamesBaseFeature.new
    end
  end
end
