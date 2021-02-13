import mocha from 'mocha';
import chaiHttp from 'chai-http';
import chai from 'chai';
import fs from 'fs';
import app from '../src/index';
import mockData from './mocks/testData';
import { token, userid } from './usertests.spec';

chai.should();
chai.use(chaiHttp);
const { it, describe } = mocha;
describe('Updating user profile', () => {
  it('It should  update user profile', (done) => {
    chai.request(app)
      .patch('/api/v1/users/updateProfile')
      .set('authorization', token)
chai.should();
chai.use(chaiHttp);
const user = {
  email: 'neddyberry@gmail.com',
  password: 'admin1234'
};
let userToken = '';
let userId = '';
const { it, describe } = mocha;
describe('Updating user profile', () => {
  it('login a user', (done) => {
    chai.request(app)
      .post('/api/v1/users/signin')
      .send(user)
      .end((err, response) => {
        response.should.have.status(200);
        userToken = response.body.data.token;
        userId = response.body.data.userInfo.id;
        done();
      });
  });
  it('It should  update user profile', (done) => {
    chai.request(app)
      .patch('/api/v1/users/updateProfile')
      .set('authorization', userToken)
      .field({
        firstName: mockData.profileData.firstName,
        lastName: mockData.profileData.lastName,
        preferedLanguage: mockData.profileData.preferedLanguage,
        officeAddres: mockData.profileData.officeAddres,
      })
      .attach('profilePicture', fs.readFileSync('./test/mocks/file/tree.png'), 'tree.png')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status');
        response.body.should.have.property('message');
        done();
      });
  });

  it('It should display user profile', (done) => {
    chai.request(app)
      .get(`/api/v1/users/profile/${userid}`)
      .set('authorization', token)
      .get(`/api/v1/users/profile/${userId}`)
      .set('authorization', userToken)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status');
        response.body.should.have.property('message');
        response.body.should.have.property('data');
        done();
      });
  });
});
