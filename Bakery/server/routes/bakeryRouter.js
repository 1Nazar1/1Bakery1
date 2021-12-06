const Router = require('express')
const router = new Router()
const bakeryController = require('../controllers/bakeryController')

router.post('/', bakeryController.create)
router.get('/', bakeryController.getAll)
router.get('/:id', bakeryController.getOne)

module.exports = router