const PORT =process.env.NODE_ENV || 5000;
const app = require('./app');


// app.listen(PORT,()=>console.log("I saw this on that internet site and yuck"))
const knexInstance = require("./db/db");

knexInstance.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error(error);
    knexInstance.destroy();
  });

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}


