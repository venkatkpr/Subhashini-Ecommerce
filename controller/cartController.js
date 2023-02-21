
import Product from '../model/productSchema.js'
import Cart from '../model/cartSchema.js'


const addCart=async(req,res)=>{
   const payload=req.body
    console.log(payload);
    console.log(req.user);
    try {
        const getCart=await Cart.find()
        const edata=await Product.findOne({productId:payload.productId},{_id:0,__v:0})
       
        if(!edata) return res.send("There is no product ")

        const addMovie=await Cart.create({cart:edata,payload,user:req.user._id,cartId:getCart.length+1})
        
        
        if(addMovie){
            return res.json({
                message:"cart added successfully",
                data:addMovie
            })
            
        }
        else{
            return res.json({
                message:"cart added failed",
                data:addMovie
            })
        }
    } catch (error) {
        return res.send(error.message)
    }
}


const getAllcart=async(req,res)=>{
    const {match='{}'}=req.query
    console.log(match);
    try {
       const data=await Cart.find({user:req.user._id}) 
       if (data) return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }
}


const deleteCart=async(req,res)=>{
    console.log(req.params.cartId);
    
     try {
         const edata=await Cart.findOneAndDelete({cartId:req.params.cartId})
         
        
         if(!edata) return res.send("There is no product ")
 
          
         if(edata){
             return res.json({
                 message:"product removed from cart",
            
             })
             
         }
         else{
             return res.json({
                 message:"cart deleted failed",
                 data:addMovie
             })
         }
     } catch (error) {
         return res.send(error.message)
     }
 }
 



export {addCart,getAllcart,deleteCart}

