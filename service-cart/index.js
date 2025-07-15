const express = require('express');
const app = express();

app.use(express.json());

let cart = [];

app.get('/', (req, res) => {
  res.send('Cart service is running');
});

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const item = { productId, quantity };
  cart.push(item);
  res.status(201).json(item);
});

module.exports = app;

if (require.main === module) {
  app.listen(3003, () => console.log('Cart service on port 3003'));
}
