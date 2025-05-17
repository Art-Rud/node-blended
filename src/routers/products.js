import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductCtrl,
  deleteProductCtrl,
  getProductByIdCtrl,
  getProductsCtrl,
  updateProductCtrl,
} from '../controllers/products.js';
const router = express.Router();

router.get('/products', ctrlWrapper(getProductsCtrl));
router.get('/products/:id', ctrlWrapper(getProductByIdCtrl));
router.post('/products', ctrlWrapper(createProductCtrl));
router.patch('/products/:id', ctrlWrapper(updateProductCtrl));
router.delete('/products/:id', ctrlWrapper(deleteProductCtrl));
export default router;
