/*eslint-disable */
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../src/index';
import User from '../src/models/user';
import { exist } from 'joi';
import userServices from '../src/services/userService';
require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();

const existingUser = {
	"email": "isbernard2001@gmail.com",
	"password": "isbernard2001@gmail.com",
	"firstName": "Bernard",
	"lastName": "ISHIMWE"
}

let token = null;
let userid= null;

describe('User tests', ()=>{
    it('Should create a new account', (done)=>{
        chai.request(app)
            .post('/api/v1/users/signup')
            .send(existingUser)
            .end((error, response)=>{
                token = response.body.data.token;
                response.should.have.status(201);
                done();
            })
    });
    it('Should not save the user who is already there', (done)=>{
        chai.request(app)
            .post('/api/v1/users/signup')
            .send(existingUser)
            .end((error, response)=>{
                response.should.have.status(409);
                response.body.should.have.property('message');
                response.body.message.should.equal('Email in use');
                done();
            })
    });

    it('Should not signup the user with invalid email', (done)=>{
        chai.request(app)
            .post('/api/v1/users/signup')
            .send({"email": "test@gmail.", "password": "test@gmail.com","firstName": "Bernard","lastName": "ISHIMWE"})
            .end((error, response)=>{
                response.should.have.status(400);
                response.body.should.have.property('message');
                response.body.should.have.property('status');
                expect(response.body.message).to.have.property('details');
                expect(response.body.message).to.have.property('_original');
                response.body.message.details[0].message.should.equal("\"email\" must be a valid email");
                
                

                done();

            })
    });
    it('Should not signup the user with invalid password', (done)=>{
        chai.request(app)
            .post('/api/v1/users/signup')
            .send({"email": "test@gmail.com", "password": "","firstName": "Bernard","lastName": "ISHIMWE"})
            .end((error, response)=>{
                response.should.have.status(400);
                response.body.should.have.property('status');
                response.body.should.have.property('message');
                response.body.status.should.equal(400);
                response.body.message.should.have.property('_original');
                response.body.message.should.have.property('details');
                response.body.message.details[0].should.have.property('message');
                response.body.message.details[0].message.should.equal('\"password\" is not allowed to be empty');

                done();

            })
    });
    it('should show that the firstname is required', (done)=>{
        chai.request(app)
            .post('/api/v1/users/signup')
            .end((err, res)=>{
                res.should.have.status(400);
                res.body.should.have.property('message');
                res.body.should.be.an('Object')
                res.body.message.should.be.an('Object');
                res.body.message.should.have.property('details');
                res.body.message.details[0].should.have.property('message');
                // res.body.message.details[0].should.equal('\"firstName\" is required');

                done();
            })
    });

    // Login tests

    it('Only Verified user should login', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send({ email: User.email, password: 'password' })
          .end((err, response) => {
            response.should.have.status(400);
            done();
          });
      });

    it('It should  verify the user', (done) => {
        chai.request(app)
          .get(`/api/v1/users/verifyEmail/${token}`)
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('status');
            response.body.should.have.property('message');
            done();
          });
      });

    it('It should login with email and password', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send({ email: existingUser.email, password: 'isbernard2001@gmail.com' })
          .end((err, response) => {
            response.should.have.status(200);
            token = response.body.data.token;
            userid = response.body.data.userInfo.id;
            done();
          });
      });
      it('It should not login with Invalid password', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send({ email: 'bernie@gmail.com', password: 123456789 })
          .end((err, response) => {
            response.should.have.status(400);
            done();
          });
      });

      it('It should not login with null password', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send({ email: 'alexisvacilli10@gmail.com', password: null })
          .end((err, response) => {
            response.should.have.status(400);
            done();
          });
      });
      it('It should not login with null email', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send({ email: null, password: 'password' })
          .end((err, response) => {
            response.should.have.status(400);
            done();
          });
      });
      it('should not login with unregistred email', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send({ email: 'vacilli@gmail.com', password: 'password' })
          .end((err, response) => {
            response.should.have.status(404);
            done();
          });
      });

      //forget password

      it('should send an reset password link to email', (done) => {
        chai.request(app)
          .post('/api/v1/users/forgotPassword')
          .send({ email: existingUser.email})
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.have.property('data');
            response.body.should.have.property('message');
            token = response.body.data.token;
            done();
          });
      });
      it('should not send an reset password link to unregistered email', (done) => {
        chai.request(app)
          .post('/api/v1/users/forgotPassword')
          .send({email:'fred@gmail.com'})
          .end((err, response) => {
            response.should.have.status(404);
            response.body.should.have.property('message');
            done();
          });
      });

      // reset password  

      it('should reset password and update it to the Database', (done) => {
        chai.request(app)
          .put(`/api/v1/users/resetpassword/${token}`)
          .send({password: 'password10'})
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('message');
            done();
          });
      });

      it('It should  not the reset password without new password', (done) => {
        chai.request(app)
          .put(`/api/v1/users/resetpassword/${token}`)
          .end((err, response) => {
            response.should.have.status(400);
            response.body.should.be.a('object');
            response.body.should.have.property('message');
            done();
          });
      });

      it('It should  not the reset password with empty password', (done) => {
        chai.request(app)
          .put(`/api/v1/users/resetpassword/${token}`)
          .send({password: null })
          .end((err, response) => {
            response.should.have.status(400);
            response.body.should.be.a('object');
            response.body.should.have.property('message');
            done();
          });
      });
      it("Should not logout with invalid token", (done)=>{
        chai.request(app)
            .get('/api/v1/users/logout/')
            .set({ "Authorization": `Bearer somenonexistenttoken` })
            .end((error, response)=>{
              expect(response).to.have.status(403);
              expect(response.body).to.have.property('status');
              expect(response.body).to.have.property('message');
              expect(response.body.status).to.equal(403);
              expect(response.body.message).to.have.property('name');
              expect(response.body.message).to.have.property('message');
              expect(response.body.message.message).to.equal('jwt malformed');
              expect(response.body.message.name).to.equal('JsonWebTokenError'); 

              done();
            })
      })
});
export {
  token,
  userid
};