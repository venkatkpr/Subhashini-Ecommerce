import express from 'express';
import { addBooking,getAll} from '../controller/bookingController.js';
import auth from '../middleware/auth.js';

const router=express.Router()

router.post('/add',addBooking)
router.get('/getAll',getAll)

export default router;