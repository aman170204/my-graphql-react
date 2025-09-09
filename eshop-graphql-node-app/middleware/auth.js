const jwt = require('jsonwebtoken');

function isAuth(req, res, next){
    const authHeader = req.get('Authorization');
    if(!authHeader){
        req.isAuth = false;
        return next();
    }

    const token = authHeader.split(' ')[1]; // Authorization
    if(!token || token === ''){
        req.isAuth = false;
        return next();
    }

    try{
        const decoded = jwt.verify(token, 'jwtPrivateKey');
        req.user = decoded;
        req.isAuth = true;
        next();
    }catch(er){
        req.isAuth = false;
        return next();
    }
}
module.exports = isAuth;