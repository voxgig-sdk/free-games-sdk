
import { Context } from './Context'


class FreeGamesError extends Error {

  isFreeGamesError = true

  sdk = 'FreeGames'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FreeGamesError
}

