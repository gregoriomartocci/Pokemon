const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log("Conexion con la base de datos correcta");
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
