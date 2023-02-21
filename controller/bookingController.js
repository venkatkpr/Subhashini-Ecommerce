import User from '../model/userSchema.js';
import Booking from '../model/bookingSchema.js';
import Movie from '../model/cartSchema.js';

const addBooking=async(req,res)=>{
   const payload=req.body

    try {
        const getMovie=await Movie.find({movieName:payload.movie})
        const addMovie=await Booking.create({
            movie:getMovie._id,
            user:payload.user,
            bookingStatus:payload.bookingStatus
        })
          
    
        if(addMovie){
            return res.json({
                message:"booking added successfully",
                data:addMovie
            })
            
        }
        else{
            return res.json({
                message:"movie added failed",
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
       const data=await Booking.find(JSON.parse(match)).populate({path:'movie',model:"Movie"})
       if (data) return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }

}

// const userBookingget=async(req,res)=>{
//     const {match='{}'}=req.query
//     console.log(match);
//     try {
//        const data=await Booking.find(JSON.parse(match)) 
//        if (data) return res.send(data)
//     } catch (error) {
//         return res.send(error.message)
//     }

// }




export {addBooking,getAll}

