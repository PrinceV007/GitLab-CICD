const request = require('supertest');
const app = require('../index');

describe('Cart Service Routes', () => {
  test('GET / should return running message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Cart service is running');
  });

  test('GET /cart should return cart items', async () => {
    const res = await request(app).get('/cart');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /cart should add item to cart', async () => {
    const res = await request(app)
      .post('/cart')
      .send({ productId: 1, quantity: 2 });
    expect(res.status).toBe(201);
    expect(res.body.quantity).toBe(2);
  });
});
