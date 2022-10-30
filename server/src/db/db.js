const environment = process.env.NODE_ENV || "development";


const knexfile = require('../../knexfile')
require('dotenv').config();
const knex = require('knex');
const configOptions = knexfile[environment]

const knexInstance = knex(configOptions)

knexInstance.raw("SELECT VERSION()").then(() => {
    console.log(`connection to knex was successful!`);
  });

module.exports = knexInstance;