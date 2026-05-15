package = "voxgig-sdk-free-games"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/free-games-sdk.git"
}
description = {
  summary = "FreeGames SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["free-games_sdk"] = "free-games_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
