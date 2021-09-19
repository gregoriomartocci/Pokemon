const server = require("./src/app.js");
const express = require("express");
const { conn } = require("./src/db.js");
const path = require("path");
const PORT = process.env.PORT || 3001;

server.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
}

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log("Conexion con la base de datos correcta");
  server.listen(PORT, () => {
    console.log(`listening at ${PORT}`); // eslint-disable-line no-console
  });
});
