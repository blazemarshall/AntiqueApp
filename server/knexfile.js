// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 * 
 */
 const path = require('path');
 require("dotenv").config();
 const {
  DATABASE_URL_DEV='postgresql://postgres@localhost/postgres'
} = process.env;
 



 module.exports = {
   development: {
     client: 'postgresql',
    //  searchPath:'knex',
     connection: DATABASE_URL_DEV,
    //  useNullAsDefault: true,
     pool: {
         min: 1,
         max: 5
       },
     migrations:{
         directory:path.join(__dirname,"./src","db","migrations"),
     },
     seeds:{
      directory:path.join(__dirname,'./src/db/seeds'),
     }
   },
  
 };
 