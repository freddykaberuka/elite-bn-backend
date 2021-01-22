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

describe('User tests', async()=>{
    it('Should create a new account', (done)=>{
        chai.request(app)
            .post('/api/v1/users/signup')
            .send(existingUser)
            .end((error, response)=>{
                response.should.have.status(200);
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
    userServices.drop(existingUser.email);
    

});
