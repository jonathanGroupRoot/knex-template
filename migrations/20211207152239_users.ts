import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", (table) => {
        table.string("id").primary().unique();
        table.string("name");
        table.string("email");
        table.string("password");
        table.dateTime("createdAt").defaultTo(knex.fn.now()).notNullable();
        table.dateTime("updatedAt");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users");
}
