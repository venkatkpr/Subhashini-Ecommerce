import mongoose from 'mongoose';


const productSchema= new mongoose.Schema({
productId:{
   type:String
},
 name:{
    type:String,
    required:true
 },
 price:{
    type:Number,
    required:true
 },
 color:{
    type:String,   
 },
 date:{
   type:Date,
   default:Date.now()
 },
 image:{
    type:String
 }
})

var Product=mongoose.model('Product',productSchema)



export default Product