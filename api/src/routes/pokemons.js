const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
 res.send('holi soy un pokemon');   
});


module.exports = router;