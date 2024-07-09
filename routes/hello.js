const express = require('express');
const router = express.Router();
const validateSchema = require('../middleware/validateRequest');
const { isAuthenticated } = require('../middleware/isAuthenticated');

const  { 
    welcome
} = require('../controllers/hello.controller');


/**
 * @openapi
 * '/hello':
 *  get:
 *     tags:
 *     - Hello Controller
 *     summary: Hello Get Route
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
/* Route without any middleware */
router.get('/', welcome);
/**
 * @openapi
 * '/hello/{name}':
 *  get:
 *     tags:
 *     - Hello Controller
 *     summary: Hello Get Route
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name (any string)
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
/* Route with validateSchema middleware */
router.get('/:name', validateSchema('hello', 'welcome'), welcome);

/* Route with isAuthenticated middleware */
router.get('/protected/:name', validateSchema('hello', 'welcome'), isAuthenticated, welcome);

/**
 * @openapi
 * '/hello/create':
 *  post:
 *     tags:
 *     - Hello Controller
 *     summary: Hello Post Route
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
 *                type: string
 *                default: John Doe
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post('/create', validateSchema('hello', 'welcome'), welcome);

/**
 * @openapi
 * '/hello/delete/{name}':
 *  delete:
 *     tags:
 *     - Hello Controller
 *     summary: Hello Get Route
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name (any string)
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.delete('/delete/:name', validateSchema('hello', 'welcome'), welcome);

/**
 * @openapi
 * '/hello/update/{name}':
 *  put:
 *     tags:
 *     - Hello Controller
 *     summary: Hello Put Route
 *     parameters:
 *      - name: name
 *        in: path
 *        description: The name (any string)
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.put('/update/:name', validateSchema('hello', 'welcome'), welcome);

module.exports = router;