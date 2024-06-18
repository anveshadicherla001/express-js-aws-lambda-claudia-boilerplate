const express = require('express');
const router = express.Router();
const validateSchema = require('../middleware/validateRequest');
const { isAuthenticated } = require('../middleware/isAuthenticated');

const  { 
    welcome
} = require('../controllers/hello.controller');

/* Route without any middleware */
router.get('/', welcome);
/* Route with validateSchema middleware */
router.get('/:name', validateSchema('hello', 'welcome'), welcome);
/* Route with isAuthenticated middleware */
router.get('/protected/:name', validateSchema('hello', 'welcome'), isAuthenticated, welcome);

module.exports = router;