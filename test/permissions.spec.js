import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);

const requester = {
  email: 'neddyberry@gmail.com',
  password: 'admin1234',
};
const admin = {
  email: 'admin@barefoot.com',
  password: 'admin1234',
};
const permission = 'get_roles';

let adminToken = '';
let requesterToken = '';
let id = '';

describe('Permissions/', () => {
  it('It should not allow unauthenticated  user  to access permissions operations ', (done) => {
    chai.request(app)
      .get('/api/v1/permissions')
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
  it('It should not allow  user rather than superAdmin or other authorized user  to access permissions opperations', (done) => {
    chai.request(app)
      .get('/api/v1/permissions')
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
  it('It should  allow   superAdmin  to save new permissions', (done) => {
    chai.request(app)
      .post('/api/v1/permissions/save')
      .send({ permissionName: 'testperm' })
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        id = response.body.data.id;
        done();
      });
  });
  it('It should  allow   superAdmin  to get permissions', (done) => {
    chai.request(app)
      .get('/api/v1/permissions')
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('It should  allow   superAdmin  to get permissions by id', (done) => {
    chai.request(app)
      .get(`/api/v1/permissions/findById/${id}`)
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('It should  allow   superAdmin  to update permissions by id', (done) => {
    chai.request(app)
      .patch(`/api/v1/permissions/update/${id}`)
      .send({ permissionName: 'testperm2' })
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it('It should  allow   superAdmin  to delete permissions by id', (done) => {
    chai.request(app)
      .delete(`/api/v1/permissions/delete/${id}`)
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
});
