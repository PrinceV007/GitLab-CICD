const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Cart service is running'));
app.listen(3003, () => console.log('Cart service on port 3003'));
