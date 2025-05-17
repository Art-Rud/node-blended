import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../services/products.js';
import createHttpError from 'http-errors';
export const getProductsCtrl = async (req, res) => {
  const products = await getProducts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};
export const getProductByIdCtrl = async (req, res) => {
  const { id } = req.params;
  const product = await getProductById(id);
  if (!product) {
    throw new createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${id}!`,
    data: product,
  });
};
export const createProductCtrl = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};
export const updateProductCtrl = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await updateProduct(id, req.body);
  if (!updateProduct) {
    throw new createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: updatedProduct,
  });
};
export const deleteProductCtrl = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id);
  if (!deleteProduct) {
    throw new createHttpError(404, 'Product not found');
  }
  res.status(204).end();
};
