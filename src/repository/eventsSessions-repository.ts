import Knex from "knex";

import { EventsSessions } from "../domain/eventsSessions";
import { IEventsSessionsRepository } from "./interfaces/eventsSessions-repository-interface";

export class EventsSessionsRepository implements IEventsSessionsRepository {
    private tableNameEventsSessions = "eventsSessions";
    private db: Knex;

    constructor({ db }) {
        this.db = db;
    }

    async saveEventsSessions(eventsSessions: EventsSessions[]): Promise<void> {
        await this.db(this.tableNameEventsSessions).insert(eventsSessions);
    }

    async getByIdEventsSessions(id: string[]): Promise<EventsSessions[]> {
        return this.db(this.tableNameEventsSessions)
            .select()
            .whereIn("eventId", id);
    }
}
