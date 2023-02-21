

function user(req,res,next){
    if(req.user.isuser ===false) {
        return res.status(403).send('Access denied')
    }
    else{
        next();
    }
    
}

export default user