import { FreeGamesEntityBase } from '../FreeGamesEntityBase';
import type { FreeGamesSDK } from '../FreeGamesSDK';
import type { Control } from '../types';
import type { Giveaway, GiveawayLoadMatch, GiveawayListMatch } from '../FreeGamesTypes';
declare class GiveawayEntity extends FreeGamesEntityBase<Giveaway> {
    constructor(client: FreeGamesSDK, entopts: any);
    make(this: GiveawayEntity): GiveawayEntity;
    load(this: any, reqmatch?: GiveawayLoadMatch, ctrl?: Control): Promise<GiveawayEntity>;
    list(this: any, reqmatch?: GiveawayListMatch, ctrl?: Control): Promise<GiveawayEntity[]>;
}
export { GiveawayEntity };
