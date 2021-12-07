import { Events } from "../../domain/events";

export interface IEventsRepository {
    saveEvents(events: Events): Promise<void>;
    getEvents(): Promise<Events[]>;
}
