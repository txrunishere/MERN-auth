import { Router } from "express";
import { handleHealthCheck, handleRegister, handleLogin } from "../controllers/auth.controller.js";

const router = Router();

router.route("/healthcheck").get(handleHealthCheck)
router.route("/register").post(handleRegister)
router.route("/login").post(handleLogin)

export default router;
