const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const pokemonRoutes = require("./pokemons.js");
const typesRoutes = require("./types.js");
const StatsRoutes = require("./stats.js");

router.use("/pokemon", pokemonRoutes);
router.use("/types", typesRoutes);
router.use("/stats", StatsRoutes);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
