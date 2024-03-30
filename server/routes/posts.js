import express from "express"
import { getPost } from "../controllers/post.js"

const router = express.Router()

router.get("/test", getPost)

export default router