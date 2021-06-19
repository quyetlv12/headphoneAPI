import express from "express";
import { showListCart, addCarts } from "../controller/cartController";
const cartRouter = express.Router();

cartRouter.get("/cart" , showListCart)
cartRouter.post("/cart" , addCarts)
module.exports = cartRouter;