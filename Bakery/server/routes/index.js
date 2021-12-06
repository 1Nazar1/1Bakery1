const Router = require('express')
const router = new Router()


const bakeryRouter = require('./bakeryRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use(`/user`, userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/bakery', bakeryRouter)

module.exports = router