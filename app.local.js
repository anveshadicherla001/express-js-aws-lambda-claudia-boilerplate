'use strict'
const app = require('./app');
const port = process.env.APP_PORT || 3000;
const server = app.listen(port, () =>
    console.log(`Server is listening on port ${port}.`)
);
server.timeout = 20000;