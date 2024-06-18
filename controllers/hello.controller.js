const db = require('../config/db');

const welcome = (async (req, res) => {
    try {
        const result = await db.query(`SELECT CURRENT_TIMESTAMP;`);
        return res.send(`<body style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0; margin: 0;">
            <div style="text-align: center; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333;">Welcome, <span id="username">${req.params.name || 'User'}</span></h1>
                <h3 style="color: green;">Connected to DB: ${result[0].CURRENT_TIMESTAMP}</h3>
            </div>
        </body>`);
    } catch (error) {
        return res.send(`<body style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0; margin: 0;">
            <div style="text-align: center; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333;">Welcome, <span id="username">${req.params.name || 'User'}</span></h1>
                <h3 style="color: red;">Unable to connect to DB</h3>
            </div>
        </body>`);
    }
});

module.exports = {
    welcome
};