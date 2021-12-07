import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("eventsSessions", (table) => {
        table.string("id").primary().unique();
        table.string("eventId").notNullable();
        table.foreign("eventId").references("id").inTable("events");
        table.string("name");
        table.dateTime("sessionStartDate");
        table.dateTime("sessionEndDate");
        table.time("timeToInscription");
        table.enum("status", ["active", "deleted"]);
        table.boolean("registrationRequired");
        table.integer("sessionCapactiytLimit");
        table.integer("companionLimit");
        table.dateTime("createdAt").defaultTo(knex.fn.now()).notNullable();
        table.dateTime("updatedAt");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("eventsSessions");
}
