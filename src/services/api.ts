import axios from 'axios';


const API = axios.create({
  baseURL: 'https://javenco.onrender.com/api',
 
});

// Attach JWT token to every request for Cart/Orders
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token&&config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const loginUser = (formData: any) => API.post('/auth/login', formData);
export const registerUser = (formData: any) => API.post('/auth/register', formData);
export const fetchHeroes = () => API.get('/heroes');
export const fetchProducts = () => API.get('/products');
export const fetchCollections = () => API.get('/featured');
export const fetchBrands = () => API.get('/brands');
export const getCart = () => API.get('/cart');
export const addToCart = (productId: string, quantity: number) => API.post('/cart', { productId, quantity });
export const removeFromCart = (productId: string) => API.delete(`/cart/${productId}`);
// @/services/api.ts
export const getCategories = () => API.get('/products/categories');
// Add this to api.ts if missing
export const createOrder = (orderData: any) => API.post('/orders', orderData);
export const createPayment=(orderData:any) => API.post("/payment",orderData)
export const getProductById = (id: string) => API.get(`/products/${id}`);
// Add this line
export const fetchMyOrders = () => API.get('/orders/my-orders');
export const cancelMyOrder = async (orderId:string) => {
  return await API.patch(`/orders/${orderId}/cancel`);};
