const express = require("express");
require('dotenv').config({ path: '.env.development' });
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
}));
app.use(cors());
const combiningReqParams = (req, res, next) => {
    const params = {...req.body,...req.query};
    req['allParams'] = params;
    next();
};
// Using the combining params middleware
app.use(combiningReqParams);

const db = require('./config/db');

//Routes
const routes = require("./routes");

(async () => {
    try {
        const result = await db.query('SELECT CURRENT_TIMESTAMP');
        console.log(`Connected to MySql: ${result[0].CURRENT_TIMESTAMP}`);
    } catch (error) {
        console.log(error);
        console.error(`Error In Connecting to MySQL`);
    }
})();

app.get("/", async (req, res) => {
    res.send({ 
        message: `Backend is running`,
        environment: process.env.APP_ENV_NAME,
        version: process.env.APP_VER_PREFIX
    });
});
app.use(`${process.env.APP_VER_PREFIX}`, routes);

module.exports = app;
