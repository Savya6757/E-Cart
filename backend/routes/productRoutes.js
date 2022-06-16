import express from "express";
import User from "../models/userModel.js";
import Product from "../models/productsModel.js";
import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

//* @desc    get all products
//* route    GET /api/products

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//* @desc    get single product
//* route    GET /api/products/:id

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
