import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "authors" },
  editora: { type: String, required: true },
  paginas: { type: String },
});

const books = mongoose.model("books", bookSchema);

export default books;
