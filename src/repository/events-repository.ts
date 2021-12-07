import Knex from "knex";

import { Events } from "../domain/events";
import { IEventsRepository } from "./interfaces/events-repository-interface";

export class EventsRepository implements IEventsRepository {
    private eventsTable = "events";
    private db: Knex;

    constructor({ db }) {
        this.db = db;
    }

    async saveEvents(events: Events): Promise<void> {
        await this.db(this.eventsTable).insert(events);
    }

    async getEvents(): Promise<Events[]> {
        return this.db(this.eventsTable).select("*");
    }
}
