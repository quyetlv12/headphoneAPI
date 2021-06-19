import express from "express";
import { showListCart, addCarts } from "../controller/cartController";
const CartRouter = express.Router();

CartRouter.get("/cart" , showListCart)
CartRouter.post("/cart" , addCarts)
module.exports = CartRouter;