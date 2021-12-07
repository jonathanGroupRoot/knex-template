import Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries

    await knex("shoppings").del();

    // Inserts seed entries

    await knex("shoppings").insert([
        {
            id: 1,

            name: "Brasil Park Shopping",

            shoppingCode: "BPS",

            postalCode: "750000",

            publicPlace: "true",

            number: "090",

            supplement: "GROWT",

            district: "Centro-oeste",

            city: "Anápolis",

            state: "GO",

            phoneNumber: "626262626",

            imageUrl: "www.google.com",

            description: "Brasil park shoopping",
        },

        {
            id: 2,

            name: "Ana Shopping",

            shoppingCode: "AS",

            postalCode: "750000",

            publicPlace: "true",

            number: "090",

            supplement: "GROWT",

            district: "Centro-oeste",

            city: "Anápolis",

            state: "GO",

            phoneNumber: "626262626",

            imageUrl: "www.google.com",

            description: "Brasil park shoopping",
        },

        {
            id: 3,

            name: "Nova América",

            shoppingCode: "NA",

            postalCode: "750000",

            publicPlace: "true",

            number: "090",

            supplement: "GROWT",

            district: "Centro-oeste",

            city: "Anápolis",

            state: "GO",

            phoneNumber: "626262626",

            imageUrl: "www.google.com",

            description: "Brasil park shoopping",
        },
    ]);
}
