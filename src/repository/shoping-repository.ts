import { Knex } from "knex";

import { Shoping } from "../domain/shoping";
import { IShoppingRepository } from "./interfaces/shopping-repository-interface";

export class ShoppingRepository implements IShoppingRepository {
    private tableName = "shoopings";

    private db: Knex;
    constructor({ db }) {
        this.db = db;
    }

    async saveShopping(shopping: Shoping): Promise<void> {
        await this.db(this.tableName).insert(shopping);
    }
}
