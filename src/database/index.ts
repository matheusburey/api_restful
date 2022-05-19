import knex from "knex";

import config from "../../knexfile";

const connectionDb = knex(config);

export default connectionDb;
