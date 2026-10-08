import e from "express";
import { login, signUp } from "../controller/authController.js";
import {loginvalidation , signupValidation} from "../middleware/reqAuthValidation.js"
const router = e.Router();


router.post('/login', loginvalidation ,login);
router.post('/signup',signupValidation, signUp);

export default router;