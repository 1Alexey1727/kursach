export const protectedRoute = (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
};