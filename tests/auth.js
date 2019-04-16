// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("POST /", () => {
  // Test login
  it("should authenticate a user", (done) => {
      chai.request(app)
          .post('/api/v1/users/signup/')
          .send({"firstName":"John", "lastName": "Doe", "email":"john@gmail.com", "password": "milkshake"})
          .post('/api/v1/auth/signin/')
          .send({"email":"john@gmail.com", "password": "milkshake"})
          .end((err, res) => {
              if(err) done(err);
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