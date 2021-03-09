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

describe('Roles/', () => {
  it('It should not allow unauthenticated  user  to access roles operations ', (done) => {
    chai.request(app)
      .get('/api/v1/roles')
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
  it('It should not allow  user rather than superAdmin or other authorized user  to access roles opperations', (done) => {
    chai.request(app)
      .get('/api/v1/roles')
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
  it('It should  allow   superAdmin  to access roles', (done) => {
    chai.request(app)
      .get('/api/v1/roles')
      .set('authorization', adminToken)
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
});
