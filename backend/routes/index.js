import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/products.js'

const router = express.Router()

// route endpoint
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router