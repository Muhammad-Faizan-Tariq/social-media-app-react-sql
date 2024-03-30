import express from "express"
import { getLike } from "../controllers/like.js"

const router = express.Router()

router.get("/test", getLike)

export default router