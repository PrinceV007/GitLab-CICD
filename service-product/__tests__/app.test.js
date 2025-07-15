const request = require('supertest');
const app = require('../index');

describe('Product Service Routes', () => {
  test('GET / should return running message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Product service is running');
  });

  test('GET /products should return products list', async () => {
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST /products should add a product', async () => {
    const res = await request(app)
      .post('/products')
      .send({ name: 'Pencil', price: 5 });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Pencil');
  });
});
