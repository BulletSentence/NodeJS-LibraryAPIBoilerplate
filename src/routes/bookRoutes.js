import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router
    .get('/books', BookController.listbooks)
    .post('/books', BookController.createBook)
    .put('/books/:id', BookController.updateBook)

export default router
