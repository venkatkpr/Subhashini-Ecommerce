import mongoose from 'mongoose';


const cartSchema= new mongoose.Schema({
user:{
  type:String
},
 cart:{
    type:Object,
    required:true
 },
 quantity:{
   type:Number,
   default:null
 },
 cartId:{
   type:String
 }
 
})

var Cart=mongoose.model('Cart',cartSchema)



export default Cart