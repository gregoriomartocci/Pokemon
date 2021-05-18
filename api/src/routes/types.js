const {Router} = require('express')
const {getAllTypes, createType} = require('../controllers/type')


const router = Router()
router.get('/', getAllTypes);
router.post('/', createType);

module.exports = router;