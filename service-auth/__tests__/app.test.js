const request = require('supertest');
const app = require('../index');

describe('Auth Service Routes', () => {
  it('GET / should return running message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Auth service is running');
  });

  it('POST /register should register a user', async () => {
    const res = await request(app).post('/register').send({
      username: 'user1',
      password: 'pass1'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  it('POST /login should return JWT token', async () => {
    await request(app).post('/register').send({
      username: 'user2',
      password: 'pass2'
    });

    const res = await request(app).post('/login').send({
      username: 'user2',
      password: 'pass2'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
