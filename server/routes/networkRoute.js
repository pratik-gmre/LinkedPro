import express from 'express'
import { isAuthentication } from '../middlewares/auth.js'
import { allMyNetwork } from '../controllers/networkController.js'




export const router = express.Router()


router.route("/mynetwork/grow/").get(isAuthentication,allMyNetwork)



