import express from 'express'
import wordsRouter from './routes.js';
const router = express.Router();

router.use('/words', wordsRouter)

export default router;