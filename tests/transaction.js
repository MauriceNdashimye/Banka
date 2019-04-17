// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Transactions', () => {
  describe('POST /', () => {
    // Debit an account
    it('Should debit an account', (done) => {
      chai.request(app)
        .post('/api/v1/transactions/1/debit')
        .set()
        .send({"cashier":2, "amount": 1000})
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('transactionId');
          res.body.data.should.have.property('accountNumber');
          res.body.data.should.have.property('amount');
          res.body.data.should.have.property('cashier');
          res.body.data.should.have.property('openingBalance');
          res.body.data.should.have.property('transactionType');
          res.body.data.should.have.property('accountBalance');
          done();
        });
    });
  });
  describe('POST /', () => {
    // Debit an account
    it('Should credit an account', (done) => {
      chai.request(app)
        .post('/api/v1/transactions/1/credit')
        .send({"cashier":2, "amount": 1000})
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('transactionId');
          res.body.data.should.have.property('accountNumber');
          res.body.data.should.have.property('amount');
          res.body.data.should.have.property('cashier');
          res.body.data.should.have.property('openingBalance');
          res.body.data.should.have.property('transactionType');
          res.body.data.should.have.property('accountBalance');
          done();
        });
    });
  });
});