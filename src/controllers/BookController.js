import books from "../models/Book.js";

class BookController {
  static listbooks = async (req, res) => {
    try {
      const booksList = await books.find()
      .populate("autor").exec();
      res.status(200).send(booksList);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static createBook = async (req, res) => {
    let book = new books(req.body);
    try {
      const bookCreated = await book.save();
      res.status(201).send(bookCreated);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static registerBook = async (req, res) => {
    try {
      const book = await books.findById(req.params.id);
      book.registered = true;
      const bookUpdated = await book.save();
      res.status(200).send(bookUpdated);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static updateBook = async (req, res) => {
    const id = req.params.id;
    try {
      const book = await books.findByIdAndUpdate(id, req.body, { new: false });
      if (!book) {
        res.status(404).send({ message: "Book not found" });
      } else {
        res.status(200).send({ message: "Book updated" });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static listBookById = async (req, res) => {
    const id = req.params.id;
    try {
      const book = await books.findById(id, { new: false }).populate("autor").exec();
      if (!book) {
        res.status(404).send({ message: "Book not found" });
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static deleteBook = async (req, res) => {
    const id = req.params.id;
    try {
      const book = await books.findByIdAndDelete(id);
      if (!book) {
        res.status(404).send({ message: "Book not found" });
      } else {
        res.status(200).send({ message: "Book deleted" });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
  
  static listBooksByEditor = async (req, res) => {
    const editor = req.query.editor;
    try {
      const booksList = await books.find({ editora: editor })
      .populate("autor").exec();
      res.status(200).send(booksList);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  } 
}

export default BookController;
