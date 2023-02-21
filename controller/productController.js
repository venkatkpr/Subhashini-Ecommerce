
import Product from '../model/productSchema.js';

const addProduct=async(req,res)=>{
   const payload=req.body

    try {
        const edata=await Product.findOne({productId:req.body.productId})
        if(edata) return res.send("product Id  is already exists")
        
        const addMovie=await Product.create(payload)
        if(addMovie){
            return res.json({
                message:"product added successfully",
                data:addMovie
            })
            
        }
        else{
            return res.json({
                message:"product added failed",
                data:addMovie
            })
        }
    } catch (error) {
        return res.send(error.message)
    }
}


const getAll=async(req,res)=>{
    const {match='{}'}=req.query
    console.log(match);
    try {
       const data=await Product.find(JSON.parse(match)) 
       if (data) return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }

}




export {addProduct,getAll}

