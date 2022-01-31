import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://testtask.alto.codes/',
});

const productsAPI = {
  getProducts(skip?: number) {
    return axiosInstance.get(`front-products.php${skip ? '?skip=' + skip : ''}`);
  },
}

export {
  productsAPI,
}