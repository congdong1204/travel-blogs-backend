import express from 'express'
import { createPost, getPosts, updatePost } from '../controllers/post.js'

const router = express.Router()

router.get('/', getPosts)

router.post('/', createPost)

router.post('/update', updatePost)

export default router