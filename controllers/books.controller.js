const Book = require('../models/Book.model');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;

    // VALIDATION
    if (!title || !author || !publishedYear) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book) {
      const error = new Error("Book not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      const error = new Error("Book not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    next(err);
  }
};
