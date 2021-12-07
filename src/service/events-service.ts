import { v4 } from "uuid";

import { Events } from "../domain/events";
import { IEventsRepository } from "../repository/interfaces/events-repository-interface";
import { IEventsSessionsRepository } from "../repository/interfaces/eventsSessions-repository-interface";
import { IEventsService } from "./interfaces/events-service-interface";

export class EventsService implements IEventsService {
    private eventsRepository: IEventsRepository;
    private eventsSessionsRepository: IEventsSessionsRepository;

    constructor({ eventsRepository, eventsSessionsRepository }) {
        this.eventsRepository = eventsRepository;
        this.eventsSessionsRepository = eventsSessionsRepository;
    }

    async saveEvents(
        {
            name,
            exhibitionStartDate,
            exhibitionEndDate,
            categoryName,
            contentRating,
            formattedDescription,
            description,
            rules,
            bannerURL,
            imageURL,
            bannerThumbnail,
            imageThumbnail,
            status,
            sessions,
        }: Events,
        shoppingCode: string
    ): Promise<Events> {
        if (!shoppingCode) {
            throw new Error("shopping code é um campo obrigatório");
        }

        const eventId = v4();

        const eventCreate = {
            id: eventId,
            name,
            exhibitionStartDate,
            exhibitionEndDate,
            categoryName,
            contentRating,
            formattedDescription,
            description,
            rules,
            bannerURL,
            imageURL,
            bannerThumbnail,
            imageThumbnail,
            status,
            shoppingCode,
        };

        const eventsSessionsCreate = sessions.map((sessions) => {
            const {
                name,
                sessionStartDate,
                sessionEndDate,
                timeToInscription,
                status,
                registrationRequired,
                sessionCapactiytLimit,
                companionLimit,
            } = sessions;

            return {
                name,
                sessionStartDate,
                sessionEndDate,
                timeToInscription,
                status,
                registrationRequired,
                sessionCapactiytLimit,
                companionLimit,
                eventId,
                id: v4(),
            };
        });
        await this.eventsRepository.saveEvents(eventCreate);
        await this.eventsSessionsRepository.saveEventsSessions(
            eventsSessionsCreate
        );

        return eventCreate;
    }

    async getEvents(): Promise<{ evento: Events[] }> {
        const events = await this.eventsRepository.getEvents();

        const eventId = events.map((events) => events.id);

        const eventsSessions =
            await this.eventsSessionsRepository.getByIdEventsSessions(eventId);

        const eventss = events.map((events) => {
            const sessions = eventsSessions.filter(
                (session) => session.eventId === events.id
            );
            return { ...events, sessions } as Events;
        });

        return { evento: eventss };
    }
}
