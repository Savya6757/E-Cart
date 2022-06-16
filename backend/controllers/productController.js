import express from "express";
import Product from "../models/productsModel.js";
import asyncHandler from "express-async-handler";

//* @desc    get all products
//* route    GET /api/products
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//* @desc    get single product
//* route    GET /api/products/:id
export const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
