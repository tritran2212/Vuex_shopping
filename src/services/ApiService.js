import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default {
  getProducts() {
    return apiClient.get('/products');
  },
  getCategories() {
    return apiClient.get('/products/categories');
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
};