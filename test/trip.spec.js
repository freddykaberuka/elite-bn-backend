import { it, describe } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
import {
  signin, trip, signin2, trip2,
} from './mocks/tripMocks';

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
let page = 1;
let tripId = 0;
const itemsPerPage = 20;

describe('Travel request', () => {
  it('should create a trip', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    const res = await chai
      .request(app)
      .post('/api/v1/trips/')
      .set('authorization', token)
      .set('permission_name', permission)
      .send(trip);

    expect(res.status).to.be.equal(201);
    expect(await res.body).to.have.property('data');
    tripId = res.body.data.id;
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
      .post('/api/v1/trips/')
      .set('authorization', token)
      .set('permission_name', permission2)
      .send(trip);

    expect(res.status).to.be.equal(400);
  });
  it('Invalid Token', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips/')
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
      .get(`/api/v1/trips/${page}/${itemsPerPage}`)
      .set('authorization', token)
      .set('permission_name', permission3);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property(
      'message',
      'You have successfully fetched the trips',
    );
  });
  it('Page Not found', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    page = 200000;

    const res = await chai
      .request(app)
      .get(`/api/v1/trips/${page}/${itemsPerPage}`)
      .set('authorization', token)
      .set('permission_name', permission3);

    expect(res.status).to.be.equal(403);
    expect(res.body).to.have.property('message', 'No trip added yet or page not found.');
  });
  it('Not allowed To View Trip', async () => {
    const userData = await signIn(signin2);
    const { token } = userData;

    const res = await chai
      .request(app)
      .get(`/api/v1/trips/${page}/${itemsPerPage}`)
      .set('authorization', token)
      .set('permission_name', permission3);

    expect(res.status).to.be.equal(500);
    expect(res.body).to.have.property(
      'message',
      'No trip added yet or page not found.',
    );
  });
  it('Trip valiolation', async () => {
    const userData = await signIn(signin);
    const { token } = userData;

    const res = await chai
      .request(app)
      .post('/api/v1/trips/')
      .set('authorization', token)
      .set('permission_name', permission)
      .send(trip2);

    expect(res.status).to.be.equal(500);
    expect(res.body).to.have.property(
      'message',
      'notNull Violation: Trip.reason cannot be null',
    );
  });

  it('should cancel travel request', async () => {
    const userData = await signIn(signin);
    const { token } = userData;
    console.log(tripId);
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/cancel-travel-request/${tripId}`)
      .set('authorization', token)
      .set('permission_name', permission);

    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property(
      'message',
      'You have successfully canceled the trip',
    );
  });

  it('should not cancel  travel request that was canceled', async () => {
    const userData = await signIn(signin);
    const { token } = userData;
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/cancel-travel-request/${tripId}`)
      .set('authorization', token)
      .set('permission_name', permission);

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property(
      'message',
      'Trip was already canceled.',
    );
  });

  it('should not cancel  travel request that is not available', async () => {
    const userData = await signIn(signin);
    const { token } = userData;
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/cancel-travel-request/${-5}`)
      .set('authorization', token)
      .set('permission_name', permission);

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property(
      'message',
      'Cancelling trip has failed.',
    );
  });

  it('should not edit travel request that is not available', async () => {
    const userData = await signIn(signin);
    const { token } = userData;
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request/${-5}`)
      .set('authorization', token)
      .set('permission_name', permission);

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property(
      'message',
      'You don\'t own this trip.',
    );
  });

  it('should not edit travel request which is not his own', async () => {
    const userData = await signIn(signin);
    const { token } = userData;
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request/${-5}`)
      .set('authorization', token)
      .set('permission_name', permission);

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property(
      'message',
      'You don\'t own this trip.',
    );
  });

  it('should edit travel request', async () => {
    const userData = await signIn(signin);
    const { token } = userData;
    console.log(tripId);
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request/${tripId}`)
      .set('authorization', token)
      .set('permission_name', permission);

    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property(
      'message',
      'You have successfully edited the trip',
    );
  });

  it('should edit travel request without request id', async () => {
    const userData = await signIn(signin);
    const { token } = userData;
    console.log(tripId);
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request`)
      .set('authorization', token)
      .set('permission_name', permission);

    expect(res.status).to.be.equal(500);
    expect(res.body).to.have.property(
      'message',
      'Something is wrong',
    );
  });

});
