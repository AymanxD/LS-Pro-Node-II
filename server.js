const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send("Hello World!");
});

app.get('/multiply/:x/:y', (req, res) => {
  res.send(String(req.params.x*req.params.y));
});

const books = ["Harry Potter", "LOTR", "The Expanse"];

app.get('/books', (req, res) => {
 res.send(books[req.query.index]);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
