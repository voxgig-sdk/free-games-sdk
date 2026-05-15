# FreeGames SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FreeGamesFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeGamesBaseFeature.new
    when "test"
      FreeGamesTestFeature.new
    else
      FreeGamesBaseFeature.new
    end
  end
end
