import User from '../model/userSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register=async(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;

    try {
        console.log(req.body);
        const edata=await User.findOne({email:email})
        if(edata) return res.send("Email is already used")
        const salt_routes=10;
        bcrypt.hash(password,salt_routes,async function(err,hash){
            const data= await User.insertMany({
                name,
                email,
                password:hash,
            })
            console.log(data);
            if(data) return res.send('User Created successfully')
        })
    } catch (error) {
        return res.send(error.message)
    }
}

const login=async(req,res)=>{
    let email=req.body.email;
    let pwd=req.body.password;
    try {
        const data= await User.findOne({email:email})
        if(data){
        bcrypt.compare(pwd,data.password,async function(err, result){
            if(result==true){
                const token=jwt.sign({_id:data._id},''+process.env.SECRET)
                return res.send(token)
                // return res.send(data)
            }
            return res.send("Please enter correct id and password")
        })
    }
    else{
        return res.send("No user on that email")
    }
    } catch (error) {
       return res.send(error.message)
    }
}
const getme=async(req,res)=>{
    // res.send('hello')
    let _id=req.user._id
    try {
       const data=await User.findOne({_id:_id}) 
       if (data) return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }

}
const updateres=async(req,res)=>{
    let _id=req.user._id
    let calc=req.body.calc
    try {
       const data=await User.updateOne({_id:_id},{
        $set:{last_calc:calc}
       })
       if(data) return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }

}



export {register,login,getme,updateres}

