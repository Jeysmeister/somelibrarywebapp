import Book from "../models/booksModel.js";

// CREATE: Add a new book
export const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).send(err);
  }
};

// READ: Get a list of all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

// READ: Get a specific book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).send("Book not found");
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// UPDATE: Update a specific book by ID
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send("Book not found");
    } else {
      res.json(updatedBook);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE: Delete a specific book by ID
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).send("Book not found");
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
