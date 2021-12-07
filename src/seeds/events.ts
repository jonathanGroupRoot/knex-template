import * as Knex from "knex";
import { v4 as uuidV4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries

    await knex("events").del();

    // Inserts seed entries

    await knex("events").insert([
        {
            id: uuidV4(),
            shoppingCode: "BPS",
            name: "Natal",
            exhibitionStartDate: "2021-12-12 12:00",
            exhibitionEndDate: "2021-12-12 13:00",
            categoryName: "Natal",
            contentRating: "Natal",
            formattedDescription: "Natal e no nova américa",
            description: "Natal e no shopping nova américa",
            rules: "Livre",
            bannerURL: "www.google.com",
            imageURL: "www.google.com",
            bannerThumbnail: "www.google.com",
            imageThumbnail: "www.google.com",
        },

        {
            id: uuidV4(),
            shoppingCode: "BPS",
            name: "Natal",
            exhibitionStartDate: "2021-12-12 12:00",
            exhibitionEndDate: "2021-12-12 13:00",
            categoryName: "Natal",
            contentRating: "Natal",
            formattedDescription: "Natal e no nova américa",
            description: "Natal e no shopping nova américa",
            rules: "Livre",
            bannerURL: "www.google.com",
            imageURL: "www.google.com",
            bannerThumbnail: "www.google.com",
            imageThumbnail: "www.google.com",
        },

        {
            id: uuidV4(),
            shoppingCode: "BPS",
            name: "Natal",
            exhibitionStartDate: "2021-12-12 12:00",
            exhibitionEndDate: "2021-12-12 13:00",
            categoryName: "Natal",
            contentRating: "Natal",
            formattedDescription: "Natal e no nova américa",
            description: "Natal e no shopping nova américa",
            rules: "Livre",
            bannerURL: "www.google.com",
            imageURL: "www.google.com",
            bannerThumbnail: "www.google.com",
            imageThumbnail: "www.google.com",
        },
    ]);
}
