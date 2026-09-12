export interface Giveaway {
    description?: string;
    end_date?: string;
    gamerpower_url?: string;
    id?: number;
    image?: string;
    instructions?: string;
    open_giveaway?: string;
    open_giveaway_url?: string;
    platforms?: string;
    published_date?: string;
    status?: string;
    thumbnail?: string;
    title?: string;
    type?: string;
    users?: number;
    worth?: string;
}
export interface GiveawayLoadMatch {
    id: number;
}
export interface GiveawayListMatch {
    platform?: string;
    sort_by?: string;
    type?: string;
}
export interface Worth {
    active_giveaways_number?: number;
    worth_estimation_usd?: string;
}
export interface WorthLoadMatch {
    platform?: string;
    type?: string;
}
