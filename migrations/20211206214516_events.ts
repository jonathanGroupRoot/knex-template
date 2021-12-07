import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("events", (table) => {
        table.string("id").primary().unique();
        table.string("shoppingCode").notNullable();
        table.string("name");
        table.dateTime("exhibitionStartDate");
        table.dateTime("exhibitionEndDate");
        table.string("categoryName");
        table.string("contentRating");
        table.text("formattedDescription");
        table.string("description", 200);
        table.string("rules", 800);
        table.string("bannerURL").notNullable();
        table.string("imageURL").nullable();
        table.string("bannerthumbnail").nullable();
        table.string("imagethumbnail").nullable();
        table.enum("status", ["draft", "published", "canceled"]);
        table.dateTime("createdAt").defaultTo(knex.fn.now()).notNullable();
        table.dateTime("updatedAt");
        table
            .foreign("shoppingCode")
            .references("shoppingCode")
            .inTable("shoppings");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("events");
}
