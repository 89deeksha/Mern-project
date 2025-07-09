import express from 'express';
import { getBook } from '../Controller/Book.controller.js'; // ✅ include .js

const router = express.Router();

router.get('/', getBook);

export default router; // ✅ default export
