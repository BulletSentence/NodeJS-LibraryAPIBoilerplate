import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "Padrões de Projeto" },
  { id: 2, titulo: "Harry Potter e a câmara secreta" },
];

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/books", (req, res) => {
  res.status(200).json(livros);
});

app.get("/books/:id", (req, res) => {
  const bookId = searchBook(req.params.id);
  if (bookId != -1) {
    res.status(200).json(livros[bookId]);
  } else {
    res.status(404).send("Book Not Found");
  }
});

app.post("/books", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Book Saved");
});

app.put("/books/:id", (req, res) => {
  const bookId = searchBook(req.params.id);
  if (bookId != -1) {
    livros[bookId].titulo = req.body.titulo;
    res.status(200).send("Book Updated");
  } else {
    res.status(404).send("Book Not Found");
  }
});

app.delete("/books/:id", (req, res) => { 
    const bookId = searchBook(req.params.id);
    if (bookId != -1) {
        livros.splice(bookId, 1);
        res.status(200).send("Book Deleted");
    } else {
        res.status(404).send("Book Not Found");
    }
});

function searchBook(bookId) {
  return livros.findIndex((book) => book.id == bookId);
}

export default app;
