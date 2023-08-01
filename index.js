import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import {MongoClient} from 'mongodb'
import user from './routes/user.js'
import booking from './routes/booking.js'
import cart from './routes/cart.js'
import dotenv from 'dotenv'

const app=express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//
MongoClient.connect(process.env.DB_URL)
.then(()=>console.log('\x1b[34m%s\x1b[0m',"ENV_PORT",process.env.PORT))
.catch((e)=>console.log('\x1b[31m%s\x1b[0m','Error While Conecting To DataBase'))
console.log('\x1b[32m%s\x1b[0m',"ENV_DB_CLUSTER",process.env.DB_URL);
const port=process.env.PORTa || 5002

app.use('/api/user',user);
app.use('/api/booking',booking)
app.use('/api',cart)
app.get('/g',(req,res)=>{
    console.log("Hello");
    console.log("Test update");
    res.send("hellow")
})

app.listen(port,()=>{
    console.log('\x1b[36m%s\x1b[0m',`Server Is Running On ${port}`);
})