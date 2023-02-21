import mongoose from 'mongoose';


const bookingSchema= new mongoose.Schema({
user:{
  type:mongoose.Schema.Types.String,
  ref:"User"
},
movie:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Movie'
},
bookingStatus:{
    type:Boolean,
    default:false
}
})

var Booking=mongoose.model('Booking',bookingSchema)



export default Booking