import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);

const requester = {
  email: 'neddyberry@gmail.com',
  password: 'admin1234'
};
const admin = {
  email: 'admin@barefoot.com',
  password: 'admin1234'
};
const permission = 'get_rolepermission';

let adminToken = '';
let requesterToken = '';

describe('Rolepermissions/', () => {
  it('It should not allow unauthenticated  user  to access rolepermissions', (done) => {
    chai.request(app)
      .get('/api/v1/rolesPermissions')
      .end((err, response) => {
        response.should.have.status(401);
        done();
      });
  });
  it('login requester', (done) => {
    chai.request(app)
      .post('/api/v1/users/signin')
      .send(requester)
      .end((err, response) => {
        response.should.have.status(200);
        requesterToken = response.body.data.token;
        done();
      });
  });
  it('It should not allow  user rather than superAdmin or other authorized user  to access rolepermissions', (done) => {
    chai.request(app)
      .get('/api/v1/rolesPermissions')
      .set('authorization', requesterToken)
      .set('permission_name', permission)
      .end((err, response) => {
        response.should.have.status(401);
        done();
      });
  });
  it('login admin', (done) => {
    chai.request(app)
      .post('/api/v1/users/signin')
      .send(admin)
      .end((err, response) => {
        response.should.have.status(200);
        adminToken = response.body.data.token;
        done();
      });
  });
  it('It should  allow   superAdmin  to access rolepermissions', (done) => {
    chai.request(app)
      .get('/api/v1/rolesPermissions')
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('It should  allow   superAdmin  to create new rolepermissions', (done) => {
    chai.request(app)
      .post('/api/v1/rolesPermissions/save')
      .send({
        role_id: '100',
        permission_id: '100'
      })
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
});
