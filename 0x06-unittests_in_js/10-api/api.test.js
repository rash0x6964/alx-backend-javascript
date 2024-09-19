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

describe('Cart page', () => {
  const cartUrl = 'http://localhost:7865/cart';

  it('should return status code 200 for valid cart id', (done) => {
    request.get(`${cartUrl}/12`, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message for valid cart id', (done) => {
    request.get(`${cartUrl}/12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for invalid cart id', (done) => {
    request.get(`${cartUrl}/hello`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return available payment methods', (done) => {
    request.get(`${baseUrl}/available_payments`, (err, res, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('/login', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return welcome message with username', (done) => {
    request.post(
      {
        url: `${baseUrl}/login`,
        body: JSON.stringify({ userName: 'Betty' }),
        headers: { 'Content-Type': 'application/json' },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
