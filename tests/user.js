// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Users', () => {
  describe('POST /', () => {
    // Test sign up
    it('should create a new user', (done) => {
      chai.request(app)
        .post('/api/v1/users/signup/')
        .send({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          password: 'milkshake',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('firstName');
          res.body.data.should.have.property('lastName');
          res.body.data.should.have.property('email');
          done();
        });
    });
    // Test login
    it('should autheticate a user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin/')
        .send({
          email: 'john@gmail.com',
          password: 'milkshake',
        })
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('firstName');
          res.body.data.should.have.property('lastName');
          res.body.data.should.have.property('email');
          done();
        });
    });
  });
  describe('GET /', () => {
    // Test to get all users records
    it('should get all users records', (done) => {
      chai.request(app)
        .get('/api/v1/users/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    // Test to get single user record
    it('should get a single user record', (done) => {
      const _id = 1;
      chai.request(app)
        .get(`/api/v1/users/${_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    // Test to get single student record
    it('should not get a single user record', (done) => {
      const _id = 5;
      chai.request(app)
        .get(`/${_id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
