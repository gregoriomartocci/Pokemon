const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const path = require("path");
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "client/build")));
}

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log("Conexion con la base de datos correcta");
  server.listen(PORT, () => {
    console.log(`listening at ${PORT}`); // eslint-disable-line no-console
  });
});
