import { Context } from './Context';
declare class FreeGamesError extends Error {
    isFreeGamesError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FreeGamesError };
