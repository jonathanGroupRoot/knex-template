import { POST, GET, route } from "awilix-express";
import { Request, Response } from "express";

import { IEventsService } from "../../service/interfaces/events-service-interface";

@route("/events")
export class EventsController {
    private eventsService: IEventsService;

    constructor({ eventsService }) {
        this.eventsService = eventsService;
    }

    @POST()
    async createEvents(request: Request, response: Response) {
        const shoppingCode = request.headers.shoppingcode as string;
        const events = request.body;

        const eventCreated = await this.eventsService.saveEvents(
            events,
            shoppingCode
        );

        return response
            .status(201)
            .json({ id: eventCreated.id, status: eventCreated.status });
    }

    @GET()
    async getEvents(request: Request, response: Response) {
        const events = await this.eventsService.getEvents();

        return response.status(200).json(events);
    }
}
