
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Weekday {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

export enum PlayerType {
    Tank = "Tank",
    Damage = "Damage",
    Healer = "Healer",
    Special = "Special"
}

export class CampaignInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    players?: Nullable<Nullable<PlayerInput>[]>;
    meetingTime?: Nullable<string>;
    meetingDay?: Nullable<Weekday>;
}

export class PlayerInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    campaign?: Nullable<CampaignInput>;
    type?: Nullable<PlayerType>;
}

export class Campaign {
    id: string;
    name: string;
    description?: Nullable<string>;
    startDate: string;
    endDate: string;
    players?: Nullable<Nullable<Player>[]>;
    meetingTime?: Nullable<string>;
    meetingDay?: Nullable<Weekday>;
}

export class Player {
    id: string;
    name: string;
    email: string;
    phone?: Nullable<string>;
    campaign?: Nullable<Campaign>;
    type: PlayerType;
}

export abstract class IQuery {
    abstract campaign(id: string): Nullable<Campaign> | Promise<Nullable<Campaign>>;

    abstract player(id: string): Nullable<Player> | Promise<Nullable<Player>>;
}

export abstract class IMutation {
    abstract upsertCampaign(campaign: CampaignInput): Nullable<Campaign> | Promise<Nullable<Campaign>>;

    abstract upsertPlayer(player: PlayerInput): Nullable<Player> | Promise<Nullable<Player>>;
}

type Nullable<T> = T | null;
