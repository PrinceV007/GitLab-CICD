const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Product service is running'));
app.listen(3002, () => console.log('Product service on port 3002'));
