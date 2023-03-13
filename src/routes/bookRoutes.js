import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router
    .get('/books', BookController.listbooks)
    .get('/books/:id', BookController.listBookById)
    .post('/books', BookController.createBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook)

export default router
