import { Events } from "../../domain/events";

export interface IEventsService {
    saveEvents(events: Events, shoppingCode: string): Promise<Events>;
    getEvents(): Promise<{ evento: Events[] }>;
}
