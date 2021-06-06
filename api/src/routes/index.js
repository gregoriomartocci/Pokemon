const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const pokemonRoutes = require('./pokemons.js');
const typesRoutes = require('./types.js');

router.use('/pokemon', pokemonRoutes)
router.use('/types', typesRoutes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
