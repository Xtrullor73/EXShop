const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')
// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', orderController.create)
// router.get('/', orderController.getAll)

module.exports = router
