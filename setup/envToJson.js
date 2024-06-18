const dotenv = require('dotenv');
const fs = require('fs');

const configProperty = process.argv[2] === 'DEV' ? '.env.development' : '.env.production';
const filePrefix = process.argv[2] === 'DEV' ? 'dev' : 'prod';
const envPrefix = process.env.PREFIX || 'APP';

// Load the environment variables from .env file
dotenv.config({ path: configProperty });

// Convert environment variables to JSON format dynamically
const envJson = {};
for (const key in process.env) {
    if (process.env.hasOwnProperty(key) && key.startsWith(`${envPrefix}_`)) {
        envJson[key] = process.env[key];
    }
}

// Convert JSON object to JSON string with indentation
const envJsonString = JSON.stringify(envJson, null, 2);

// Write the JSON string to a file (e.g., env.json)
fs.writeFileSync(`app.config.${filePrefix}.json`, envJsonString, 'utf8');

console.log(`Environment variables converted to "app.config.${filePrefix}.json" successfully!`);