import env from 'dotenv/config'
import jwt from 'jsonwebtoken'

function  auth(req,res,next){
    const token=req.header('x-auth-token')
    console.log('token');
    if(!token) return res.status(401).send('user denied')
    try {
        console.log("working");
        const decoded=jwt.verify(token,''+process.env.SECRET)
        req.user=decoded;
        next();
    } catch (error) {
        res.status(400).send('invalid token'+error.message)
    }
}

export default auth