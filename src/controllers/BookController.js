import books from "../models/Book.js";

class BookController {
    
    static listbooks = async (req, res) => {
        try {
            const booksList = await books.find();
            res.status(200).send(booksList);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    static createBook = async (req, res) => {
       let book = new books(req.body)
         try {
            const bookCreated = await book.save();
            res.status(201).send(bookCreated);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
       
}

export default BookController