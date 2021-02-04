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
