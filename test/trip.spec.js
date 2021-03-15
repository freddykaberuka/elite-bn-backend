import { it, describe } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
import { signin, trip, signin2, trip2 } from './mocks/tripMocks';

chai.expect();
chai.use(chaiHttp);

const signIn = async (user) => {
  const userData = await chai
    .request(app)
    .post('/api/v1/users/signin')
    .send(user);
  const data = {
    id: userData.body.data.id,
    token: `Bearer ${userData.body.data.token}`,
  };
  return data;
};

const permission = 'create_t_request';
const permission2 = 'xxxxxx';
const permission3 = 'view_t_request';

describe('Travel request', () => {
  it('should create a trip', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    const res = await chai
      .request(app)
      .post('/api/v1/trip/save')
      .set('authorization', token)
      .set('permission_name', permission)
      .send(trip);

    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property(
      'message',
      'You have successfully created a trip',
    );
  });
  it('should not create a trip', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    const res = await chai
      .request(app)
      .post('/api/v1/trip/save')
      .set('authorization', token)
      .set('permission_name', permission2)
      .send(trip);

    expect(res.status).to.be.equal(400);
  });
  it('Invalid Token', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trip/save')
      .set('permission_name', permission2)
      .send(trip);

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property('message', 'Token Required');
  });
  it('View Trip', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    const res = await chai
      .request(app)
      .get('/api/v1/trip/findById/1')
      .set('authorization', token)
      .set('permission_name', permission3);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property(
      'message',
      'You have successfully fetched the trip',
    );
  });
  it('Trip Not found', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    const res = await chai
      .request(app)
      .get('/api/v1/trip/findById/5')
      .set('authorization', token)
      .set('permission_name', permission3);

    expect(res.status).to.be.equal(404);
    expect(res.body).to.have.property('message', 'Trip not found');
  });
  it('Not allowed To View Trip', async () => {
    const userData = await signIn(signin2);
    const { token } = userData;

    const res = await chai
      .request(app)
      .get('/api/v1/trip/findById/1')
      .set('authorization', token)
      .set('permission_name', permission3);

    expect(res.status).to.be.equal(403);
    expect(res.body).to.have.property(
      'message',
      'not allowed to view this trip',
    );
  });
  it('Trip valiolation', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    const res = await chai
      .request(app)
      .post('/api/v1/trip/save')
      .set('authorization', token)
      .set('permission_name', permission)
      .send(trip2);

    expect(res.status).to.be.equal(500);
    expect(res.body).to.have.property(
      'message',
      'notNull Violation: Trip.reason cannot be null',
    );
  });
});
