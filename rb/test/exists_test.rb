# FreeGames SDK exists test

require "minitest/autorun"
require_relative "../FreeGames_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FreeGamesSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
