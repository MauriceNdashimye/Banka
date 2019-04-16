// // Import the dependencies for testing
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../server';
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
// describe("Accounts", () => {
//   describe("POST /", () => {
//     // Create an account
//     it("should create a new account", (done) => {
//       chai.request(app)
//         .post('/api/v1/accounts/')
//         .send({
//           "email": "john@gmail.com"
//         })
//         .end((err, res) => {
//           res.should.have.status(201);
//           res.body.should.be.a('object');
//           res.body.should.have.property('data');
//           res.body.data.should.have.property('accoutNumber');
//           res.body.data.should.have.property('firstName');
//           res.body.data.should.have.property('lastName');
//           res.body.data.should.have.property('email');
//           res.body.data.should.have.property('type');
//           res.body.data.should.have.property('openingBalance');
//           done();
//         });
//     });

//     it("should autheticate a user", (done) => {
//       chai.request(app)
//         .post('/api/v1/auth/signin/')
//         .send({
//           "email": "john@gmail.com",
//           "password": "milkshake"
//         })
//         .end((err, res) => {
//           if (err) done(err);
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('data');
//           res.body.data.should.have.property('token');
//           res.body.data.should.have.property('firstName');
//           res.body.data.should.have.property('lastName');
//           res.body.data.should.have.property('email');
//           done();
//         });
//     });
//   });
//   describe("PATCH /", () => {
//     it("should change account status", (done) => {
//       chai.request(app)
//         .patch(`/api/v1/account/${_id}`)
//         .send({
//           "id": "1"
//         })
//         .end((err, res) => {
//           if (err) done(err);
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('data');
//           res.body.data.should.have.property('token');
//           res.body.data.should.have.property('firstName');
//           res.body.data.should.have.property('lastName');
//           res.body.data.should.have.property('email');
//           done();
//         });
//     });
//   });
//   describe("DeLeTe/", () => {
//     it("should change account status", (done) => {
//       chai.request(app)
//         .delete(`/api/v1/account/${_id}`)
//         .send({
//           "id": "1"
//         })
//         .end((err, res) => {
//           if (err) done(err);
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('data');
//           res.body.data.should.have.property('accountNumber');
//           res.body.data.should.have.property('status');
//           done();
//         });
//     });
//   });




// });