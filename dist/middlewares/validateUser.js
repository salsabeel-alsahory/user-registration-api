export const validateUser = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    // Call next() if validation passes
    next();
};
