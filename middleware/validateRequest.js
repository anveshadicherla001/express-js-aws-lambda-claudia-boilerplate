const Ajv = require('ajv');
const ajv = new Ajv();

/**
 * 
 * @param {string} controller - The name of the controller where the function exists.
 * @param {string} action - The name of the function inside the controller to be executed.
 * @returns {Promise}
 */
module.exports = function (controller, action) {
    return async function (req, res, next) {
        try {
            const schemaPath = `../schemas/${controller.toLowerCase()}/${action.toLowerCase()}.json`;
            const schema = require(schemaPath);
            const validate = ajv.compile(schema);
            /* Combining all the request params into single object */
            const params = {...req.allParams,...req.params};
            const valid = validate(params);
            if (!valid) {
                return res.status(400).json({
                    error: 'Invalid request data',
                    details: validate.errors,
                });
            }
            next();   
        } catch (error) {
            console.log(`ERROR: The free route <${req.originalUrl}> is missing the required schema configuration.`);
            next();
        }
    }
}