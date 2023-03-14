import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = async (req, res) => {
    try {
      const authorsList = await authors.find();
      res.status(200).send(authorsList);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static createAuthor = async (req, res) => {
    let author = new authors(req.body);
    try {
      const authorCreated = await author.save();
      res.status(201).send(authorCreated);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static registerAuthor = async (req, res) => {
    try {
      const author = await authors.findById(req.params.id);
      author.registered = true;
      const authorUpdated = await author.save();
      res.status(200).send(authorUpdated);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static updateAuthor = async (req, res) => {
    const id = req.params.id;
    try {
      const author = await authors.findByIdAndUpdate(id, req.body, { new: false });
      if (!author) {
        res.status(404).send({ message: "author not found" });
      } else {
        res.status(200).send({ message: "author updated" });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static listAuthorById = async (req, res) => {
    const id = req.params.id;
    try {
      const author = await authors.findById(id, { new: false });
      if (!author) {
        res.status(404).send({ message: "author not found" });
      } else {
        res.status(200).send(author);
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  static deleteAuthor = async (req, res) => {
    const id = req.params.id;
    try {
      const author = await authors.findByIdAndDelete(id);
      if (!author) {
        res.status(404).send({ message: "author not found" });
      } else {
        res.status(200).send({ message: "author deleted" });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
}

export default AuthorController;
