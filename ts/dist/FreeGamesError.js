"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeGamesError = void 0;
class FreeGamesError extends Error {
    isFreeGamesError = true;
    sdk = 'FreeGames';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FreeGamesError = FreeGamesError;
//# sourceMappingURL=FreeGamesError.js.map