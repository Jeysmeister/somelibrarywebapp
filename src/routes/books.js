import express from "express";
const router = express.Router();
import * as booksController from "../controllers/booksController.js";

// CREATE: Add a new book
router.post("/books", booksController.createBook);

// READ: Get a list of all books
router.get("/books", booksController.getBooks);

// READ: Get a specific book by ID
router.get("/books/:id", booksController.getBookById);

// UPDATE: Update a specific book by ID
router.put("/books/:id", booksController.updateBook);

// DELETE: Delete a specific book by ID
router.delete("/books/:id", booksController.deleteBook);

export default router;
