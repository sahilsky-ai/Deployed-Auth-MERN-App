
const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) =>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403)
        .json({message: 'Unauthorized, JWT token is required'});
    }
    const token = auth.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403)
        .json({message:"'Unauthorized, JWT token is required"})
        
    }
}
module.exports = ensureAuthenticated