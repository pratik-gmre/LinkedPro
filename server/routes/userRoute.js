import express from 'express'
import { isAuthentication } from '../middlewares/auth.js'
import { getMyProfile, sendConnnectionRequest } from '../controllers/userController.js'


export const router = express.Router()



router.route('/profile').get(isAuthentication,getMyProfile)
router.route('/profile/send-request').put(isAuthentication,sendConnnectionRequest)