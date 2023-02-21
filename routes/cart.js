import express from 'express';
import { addProduct, getAll } from '../controller/productController.js';
import { addCart,getAllcart,deleteCart } from '../controller/cartController.js';
import auth from '../middleware/auth.js';
import user from '../middleware/user.js';

const router=express.Router()

router.post('/product/add',addProduct)
router.get('/product/all',getAll)

router.post('/cart/add',[auth,user],addCart)
router.get('/cart/all',[auth,user],getAllcart)
router.delete('/cart/delete/:cartId',[auth,user],deleteCart)
export default router;