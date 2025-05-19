import { Router } from "express";
import { handleHealthCheck, handleRegister } from "../controllers/auth.controller.js";

const router = Router();

router.route("/healthcheck").get(handleHealthCheck)
router.route("/register").post(handleRegister)

export default router;
