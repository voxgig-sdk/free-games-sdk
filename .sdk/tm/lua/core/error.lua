-- FreeGames SDK error

local FreeGamesError = {}
FreeGamesError.__index = FreeGamesError


function FreeGamesError.new(code, msg, ctx)
  local self = setmetatable({}, FreeGamesError)
  self.is_sdk_error = true
  self.sdk = "FreeGames"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FreeGamesError:error()
  return self.msg
end


function FreeGamesError:__tostring()
  return self.msg
end


return FreeGamesError
