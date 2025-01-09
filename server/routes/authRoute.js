import express from 'express'
import { login, onboarding, sendOtp, signUp, verifyOtp } from '../controllers/authController.js'
import { isAuthentication } from '../middlewares/auth.js'



const router = express.Router()



router.route('/signup').post(signUp)
router.route('/login').post(login)
router.route('/onboarding').post(isAuthentication,onboarding)
router.route("/onboarding/send-otp").post(isAuthentication,sendOtp)
router.route("/onboarding/verify-otp").post(isAuthentication,verifyOtp)


export default router