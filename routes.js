const express = require('express');
const router = express.Router();

//Routes
const helloRoutes = require("./routes/hello");

router.get("/", async (req, res) => {
    res.send({ app_version: process.env.APP_VER_PREFIX });
});

router.use('/hello', helloRoutes);

module.exports = router;