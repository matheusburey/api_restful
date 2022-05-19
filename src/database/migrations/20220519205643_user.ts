import { Knex } from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name", 40);
    table.string("email", 150);
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTable("users");
};
