import { FreeGamesEntityBase } from '../FreeGamesEntityBase';
import type { FreeGamesSDK } from '../FreeGamesSDK';
import type { Control } from '../types';
import type { Worth, WorthLoadMatch } from '../FreeGamesTypes';
declare class WorthEntity extends FreeGamesEntityBase<Worth> {
    constructor(client: FreeGamesSDK, entopts: any);
    make(this: WorthEntity): WorthEntity;
    load(this: any, reqmatch?: WorthLoadMatch, ctrl?: Control): Promise<WorthEntity>;
}
export { WorthEntity };
