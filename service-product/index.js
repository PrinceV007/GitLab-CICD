const express = require('express');
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: 'Pen', price: 10 },
  { id: 2, name: 'Notebook', price: 20 }
];

app.get('/', (req, res) => {
  res.send('Product service is running');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = app;

if (require.main === module) {
  app.listen(3002, () => console.log('Product service on port 3002'));
}
