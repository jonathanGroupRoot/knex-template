import { EventsSessions } from "../../domain/eventsSessions";

export interface IEventsSessionsRepository {
    saveEventsSessions(eventsSessions: EventsSessions[]): Promise<void>;
    getByIdEventsSessions(id: string[]): Promise<EventsSessions[]>;
}
