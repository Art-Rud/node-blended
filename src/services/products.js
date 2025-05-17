import { Product } from '../db/model.js';

export const getProducts = async () => {
  const products = await Product.find();
  return products;
};
export const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};
export const createProduct = async (payload) => {
  const product = await Product.create(payload);
  return product;
};
export const updateProduct = async (id, payload) => {
  const product = await Product.findByIdAndUpdate(id, payload);
  return product;
};
export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};
