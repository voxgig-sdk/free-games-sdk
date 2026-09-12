import { GiveawayEntity } from './entity/GiveawayEntity';
import { WorthEntity } from './entity/WorthEntity';
export type * from './FreeGamesTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FreeGamesEntityBase } from './FreeGamesEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class FreeGamesSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Giveaway(entopts?: Record<string, any>): GiveawayEntity;
    Worth(entopts?: Record<string, any>): WorthEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): FreeGamesSDK;
    tester(testopts?: any, sdkopts?: any): FreeGamesSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof FreeGamesSDK;
export { stdutil, config, BaseFeature, FreeGamesEntityBase, FreeGamesSDK, SDK, };
