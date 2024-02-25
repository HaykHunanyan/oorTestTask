const request = require('supertest');
const app = require('../index.js');

describe('GET /api/location', () => {
  it('should return status 200 and example response', async () => {
    const res = await request(app).get('/api/location');
    console.log(res.status);
    if (res.status !== 200) {
      throw new Error('Expected status 200, received ' + res.status);
    }
  });
});
describe('POST /api/location', () => {
  it('should return status 200 and example response', async () => {
    const res = await request(app).get('/api/location');
    console.log(res.status);
    if (res.status !== 200) {
      throw new Error('Expected status 200, received ' + res.status);
    }
  });
});