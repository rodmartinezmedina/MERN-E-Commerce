import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// router.get('/', async (req,res) => {
//   try {
//     const products =  await Product.find({})
//     res.json(products)
//   }
//   catch (error) {
//     console.error(error)
//   }
// })

// Fetch all Products
// GET / api/products
// Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
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
      res.status(404).json({ message: 'Product not found' })
    }
    // const product = products.find((p) => p._id === req.params.id)
    // res.json(product)
  })
)

export default router
