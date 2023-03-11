const http = require('http');
const port = 3000;

const rotas = {
  '/' : 'Home',
  '/books': 'Livros',
  '/authors': 'Autores',
  '/publishers' : 'Editora',
  '/about': 'Sobre'
}

const server = http.createServer((req, res) => {
  res.writeHead(200,  {'Content-Type': 'text/plain'})
  res.end(rotas[req.url])
});

server.listen(port, () => {
    console.log("Servidor em: http://localhost:" + port)
});

