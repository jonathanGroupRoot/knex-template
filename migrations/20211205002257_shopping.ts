import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("shoppings", (table) => {
        table.string("id").unique().notNullable();
        table.string("name");
        table.string("shoppingCode").primary().unique();
        table.string("postalCode");
        table.string("publicPlace");
        table.string("number");
        table.string("supplement");
        table.string("district");
        table.string("city");
        table.string("state");
        table.string("phoneNumber");
        table.string("imageUrl");
        table.text("description");
        table.enum("status", ["active", "inactive"]).defaultTo("active");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("shoppings");
}
