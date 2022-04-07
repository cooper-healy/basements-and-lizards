
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

export class CampaignInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    players?: Nullable<Nullable<Player>[]>;
    meetingTime?: Nullable<string>;
    meetingDay?: Nullable<Weekday>;
}

export class Player {
    id: string;
    name: string;
    email: string;
    phone?: Nullable<string>;
    campaigns?: Nullable<Nullable<Campaign>[]>;
}

export abstract class IQuery {
    abstract campaign(id: string): Nullable<Campaign> | Promise<Nullable<Campaign>>;
}

export abstract class IMutation {
    abstract upsertCampaign(campaignId: string): Nullable<Campaign> | Promise<Nullable<Campaign>>;
}

type Nullable<T> = T | null;
