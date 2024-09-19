const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200', (done) => {
    request.get(baseUrl, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return content type text/html', (done) => {
    request.get(baseUrl, (err, res) => {
      expect(res.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
