import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import user from './routes/user.js'
import booking from './routes/booking.js'
import cart from './routes/cart.js'

const app=express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://Subhashini:subhashini@cluster0.yrxfb3a.mongodb.net/E-commerce?retryWrites=true&w=majority')
.then(()=>console.log('db connected'))
.catch((e)=>console.log('error'))

const port=process.env.PORT || 5002

app.use('/api/user',user);
app.use('/api/booking',booking)
app.use('/api',cart)
app.get('/g',(req,res)=>{
    console.log("Hello");
    res.send("hellow")
})

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})