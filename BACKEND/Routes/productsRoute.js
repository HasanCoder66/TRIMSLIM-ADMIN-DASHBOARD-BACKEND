import express from "express"
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../Controllers/productsController.js";
const productsRoute = express.Router()

// http://{domain-name}/api/products/create
productsRoute.post('/create', createProduct)

// http://{domain-name}/api/products/:productId
productsRoute.put('/:productId', updateProduct)

// http://{domain-name}/api/products/:productId
productsRoute.delete('/:productId', deleteProduct)

// http://{domain-name}/api/products/:productId
productsRoute.get('/:productId', getSingleProduct)

// http://{domain-name}/api/products/
productsRoute.get('/', getAllProducts)


export default productsRoute