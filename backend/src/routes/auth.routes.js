import { Router } from "express";
import { handleHealthCheck, handleRegister, handleLogin, handleGetUser } from "../controllers/auth.controller.js";
import { verifyJWT } from '../middleware/auth.middlware.js'

const router = Router();

router.route("/healthcheck").get(handleHealthCheck)
router.route("/register").post(handleRegister)
router.route("/login").post(handleLogin)
router.route('/get-user').get(verifyJWT, handleGetUser)

export default router;
