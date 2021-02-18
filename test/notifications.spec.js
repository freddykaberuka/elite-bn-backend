import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../src/index';

require('@babel/polyfill');

chai.use(chaiHttp);
chai.should();

const manager = {
  email: 'trojanx07@gmail.com',
  password: 'admin1234'
};

let token = '';
let tokenId = '';
const permissionName = 'assignUsertoManager';

describe('User Assign tests', () => {
  it('login manager', (done) => {
    chai.request(app)
      .post('/api/v1/users/signin')
      .send(manager)
      .end((err, response) => {
        response.should.have.status(200);
        token = response.body.data.token;
        tokenId = response.body.data.userInfo.id;
        done();
      });
  });
  it('It should allow Manager to assign user to a Manager', (done) => {
    chai.request(app)
      .put('/api/v1/users/assign/manager')
      .set('Authorization', token)
      .set('permission_name', permissionName)
      .send({ id: 3, lineManagerId: 10 })
      .end((err, response) => {
        eventEmitter.emit('userAssignedToManager', { lineManagerId: 10, id: 3, tokenId});
        response.should.have.status(200);
        done();
      });
  });
  it('It should retrieve notifications for the signed in user', (done) => {
    chai.request(app)
      .get('/api/v1/notifications')
      .set('Authorization', token)
      .end((err, response) => {
          console.log('%%%%%%%%%%%%%%%%%%%%%%%', response.body)
        response.should.have.status(200);
        response.body.should.be.a('object');
        done();
      });
  });

});
