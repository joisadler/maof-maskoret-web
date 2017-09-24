import request from 'supertest';
import app from '../src/bin/app';

describe('requests', () => {
  let server;

  beforeEach(() => {
    server = app().listen();
  });

  test('It should response the GET method', async () => {
    const res = await request(app()).get('/');
    if (res.error) {
      throw res.error;
    }
    expect(res.status).toBe(302);
  });

  it('GET 404', async () => {
    const res = await request.agent(server)
      .get('/wrong-path');
    expect(res.status).toBe(404);
  });

  afterEach((done) => {
    server.close();
    done();
  });
});
