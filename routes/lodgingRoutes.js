const express = require('express')
const router = express.Router()

const { lodging, Outpass, Guestlodging, WardenApproval } = require('../controllers/lodgingController')

router.get('/', lodging)
router.get('/outpass', Outpass)
router.get('/guest', Guestlodging)
router.get('/wardenapproval', WardenApproval)


module.exports=router