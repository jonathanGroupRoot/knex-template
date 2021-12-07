import { EventsSessions } from "./eventsSessions";

export class Events {
    id?: string;
    shoppingCode?: string;
    name: string;
    exhibitionStartDate: Date;
    exhibitionEndDate: Date;
    categoryName: string;
    contentRating: string;
    formattedDescription: string;
    description: string;
    rules: string;
    bannerURL: string;
    imageURL: string;
    bannerThumbnail: string;
    imageThumbnail: string;
    status?: boolean;
    sessions?: EventsSessions[];
}
