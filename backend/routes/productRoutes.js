import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// Fetch all Products
// GET / api/products
// Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(products)
  })
)

// Fetch single Product
// GET / api/products/:id
// Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      // if we dont res.status it would be a 500 by default
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
