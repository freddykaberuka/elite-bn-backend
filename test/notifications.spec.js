import mocha from 'mocha';
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../src/index';

require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();

const manager = {
  email: 'trojanx07@gmail.com',
  password: 'admin1234',
};
const user = {
  email: 'neddyberry@gmail.com',
  password: 'admin1234',
};

let token = '';
let Usertoken = '';
let userId = '';
let managerId = '';
let notificationId = '';
const permissionName = 'assignUsertoManager';
const { it, describe } = mocha;
describe('User Assign tests', () => {
  it('login manager', (done) => {
    chai.request(app)
      .post('/api/v1/users/signin')
      .send(manager)
      .end((err, response) => {
        response.should.have.status(200);
        token = response.body.data.token;
        managerId = response.body.data.userInfo.id;
        done();
      });
  });
  it('login a user ', (done) => {
    chai.request(app)
      .post('/api/v1/users/signin')
      .send(user)
      .end((err, response) => {
        response.should.have.status(200);
        Usertoken = response.body.data.token;
        userId = response.body.data.userInfo.id;
        done();
      });
  });

  it('It should allow Manager to assign user to a Manager', (done) => {
    chai.request(app)
      .put('/api/v1/users/assign/manager')
      .set('Authorization', token)
      .set('permission_name', permissionName)
      .send({ id: userId, lineManagerId: managerId })
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('It should retrieve notifications for the signed in user', (done) => {
    chai.request(app)
      .get('/api/v1/notifications')
      .set('Authorization', Usertoken)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('message');
        response.body.should.have.property('data');
        notificationId = response.body.data[0].id;
        done();
      });
  });
  it('It should retrieve one notification by id for the signed in user', (done) => {
    chai.request(app)
      .get(`/api/v1/notifications/${notificationId}`)
      .set('Authorization', Usertoken)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('message');
        response.body.should.have.property('data');
        done();
      });
  });
});
