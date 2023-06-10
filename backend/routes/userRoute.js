import express from "express";
import UserController from "../controlers/userController.js";
const router = express.Router();

router.get("/", UserController.getAllUser);

export default router;
