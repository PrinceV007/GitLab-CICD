const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// In-memory user store
let users = [];

// POST /register
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
});

// POST /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, 'mysecretkey', { expiresIn: '1h' });
  res.json({ token });
});

// Health check
app.get('/', (req, res) => res.send('Auth service is running'));

// Export for tests
if (require.main === module) {
  app.listen(3001, () => console.log('Auth service on port 3001'));
} else {
  module.exports = app;
}
