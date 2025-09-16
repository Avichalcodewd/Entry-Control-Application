const express = require('express')
const router = express.Router()

const { instituteDefault, visitor, monitor, studentVisitor } = require('../controllers/InstituteController');

router.get('/', instituteDefault);

router.get('/visit', visitor)

router.get('/monitor', monitor)

router.get('/studentvisit',studentVisitor)

module.exports=router