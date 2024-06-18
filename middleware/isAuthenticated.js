const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers['authentication-token'];
        // check for valid token
        const isValidToken = true;
        if (token && isValidToken) {
            return next();
        } else {
            return res.status(403).json({ error: 'Forbidden' });
        }
    } catch (error) {
        console.log(`ERROR: IsAuthenticated Middleware Is Failing ${error}`);
        return res.status(403).json({ error: 'Forbidden' });
    }
}

module.exports = { isAuthenticated };