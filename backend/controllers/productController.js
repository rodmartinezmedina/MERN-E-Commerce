import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Fetch all Products
// GET / api/products
// Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// Fetch single Product
// GET / api/products
// Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProducts, getProductById }
