const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/User');

describe('Auth API integration', () => {
  it('regista um novo utilizador', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Teste', email: 'test@example.com', password: '123456' });

    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe('test@example.com');
  });

  it('impede registo com email duplicado', async () => {
    await User.create({ name: 'Teste', email: 'dup@example.com', password: '123456' });

    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Outro', email: 'dup@example.com', password: '123456' });

    expect(res.statusCode).toBe(400);
  });

  it('faz login com credenciais válidas', async () => {
    await User.create({ name: 'Login', email: 'login@example.com', password: '123456' });

    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'login@example.com', password: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('rejeita login com credenciais inválidas', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'nope@example.com', password: 'wrong' });

    expect(res.statusCode).toBe(401);
  });
});
