'use strict';

const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe("Employee Service Test", () => {
  it("should return correct employee for provided employee id", (done) => {
    request(app)
      .get('/api/employee?id=1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        const expectedEmployee = { name: 'Bob', office_location: 'Bangalore' };
        assert.deepEqual(res.body, expectedEmployee);
        done();
      });
  });

  it("should return not found for unknown employee id", (done) => {
    request(app)
      .get('/api/employee?id=100')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function (err, res) {
        const expectedRes = { error: 'Not Found'};
        assert.deepEqual(res.body, expectedRes)
        done();
      });
  });
});
