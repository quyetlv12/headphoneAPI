import express from "express";
const router = express.Router();
import { signup, signin, signout } from "../controller/authController";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signin", signin);
router.get("/signout", signout);
router.post("/signout", signout);

module.exports = router;
