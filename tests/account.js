// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Accounts', () => {
  describe('POST /', () => {
    // Create an account
    it('should create a new account', (done) => {
      chai.request(app)
        .post('/api/v1/accounts/')
        .send({
          'id': 1,
          'type': 'savings'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('accountNumber');
          res.body.data.should.have.property('firstName');
          res.body.data.should.have.property('lastName');
          res.body.data.should.have.property('email');
          res.body.data.should.have.property('openingBalance');
          done();
        });
    });
  });
  describe('PATCH /', () => {
    it('Should change account status', (done) => {
      const id = 1;
      chai.request(app)
        .patch(`/api/v1/account/${id}`)
        .send({
          status: 'Deactivated',
        })
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('accountNumber');
          res.body.data.should.have.property('accountStatus');
          done();
        });
    });

    /* it('Should not change account status', (done) => {
      const id = 5;
      chai.request(app)
        .patch(`/api/v1/account/${id}`)
        .send({
          status: 'Deactivated',
        })
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('msg');
          done();
        });
    }); */
  });
  describe('DELETE /', () => {
    it('Should delete an account', (done) => {
      const id = 1;
      chai.request(app)
        .delete(`/api/v1/accounts/${id}`)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });
    /*  it('Should not delete an account', (done) => {
       const id = 5;
       chai.request(app)
         .delete(`/api/v1/accounts/${id}`)
         .end((err, res) => {
           if (err) done(err);
           res.should.have.status(400);
           res.body.should.be.a('object');
           res.body.should.have.property('message');
           done();
         }); 
     }); */
  });
});
