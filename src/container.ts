import { asClass, createContainer, asValue } from "awilix";

import { EventsSessions } from "./domain/eventsSessions";
import { EventsRepository } from "./repository/events-repository";
import { EventsSessionsRepository } from "./repository/eventsSessions-repository";
import { ShoppingRepository } from "./repository/shoping-repository";
import { EventsService } from "./service/events-service";
import { ShoppingService } from "./service/shopping-service";
import { database } from "./util/database";

const definition = {
    // utils
    db: asValue(database),
    // Service

    shoppingService: asClass(ShoppingService).singleton(),
    eventsService: asClass(EventsService).singleton(),
    eventsSessionsService: asClass(EventsSessions).singleton(),

    // Repository

    shoppingRepository: asClass(ShoppingRepository).singleton(),
    eventsRepository: asClass(EventsRepository).singleton(),
    eventsSessionsRepository: asClass(EventsSessionsRepository).singleton(),
};

const container = createContainer();

container.register(definition);

export default container;
