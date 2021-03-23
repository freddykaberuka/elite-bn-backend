import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
import {
  user1, trip, trip1, user3, trip2, user2,
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
  return data.token;
};

const permission = 'create_t_request';
const permission2 = 'xxxxxx';
const permission3 = 'view_t_request';
const page = 1;
let tripId = 0;
const itemsPerPage = 20;

describe('Travel request', () => {
  it('should create a trip', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips/')
      .set('authorization', await signIn(user1))
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
    const res = await chai
      .request(app)
      .post('/api/v1/trips/')
      .set('authorization', await signIn(user1))
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
    const res = await chai
      .request(app)
      .get(`/api/v1/trips/${page}/${itemsPerPage}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission3);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property(
      'message',
      'You have successfully fetched the trips',
    );
  });
  it('Trip valiolation', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips/')
      .set('authorization', await signIn(user1))
      .set('permission_name', permission)
      .send(trip2);

    expect(res.status).to.be.equal(500);
    expect(res.body).to.have.property(
      'message',
      'notNull Violation: Trip.reason cannot be null',
    );
  });

  it('should edit travel request', async () => {
    console.log(tripId);
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request/${tripId}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission)
      .send(trip1);

    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property(
      'message',
      'You have successfully edited the trip',
    );
  });

  it('should not edit travel request that is not available', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request/${-5}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(501);
    expect(res.body).to.have.property(
      'message',
      `Trip::${-5} not found`,
    );
  });

  it('should not edit travel request which is not his own', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request/${tripId}`)
      .set('authorization', await signIn(user2))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property(
      'message',
      'You don\'t own this trip.',
    );
  });

  it('should cancel travel request', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/cancel-travel-request/${tripId}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property(
      'message',
      'You have successfully canceled the trip',
    );
  });

  it('should not edit travel request that was canceled', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/update-travel-request/${tripId}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission)
      .send(trip1);

    expect(res.status).to.be.equal(409);
    expect(res.body).to.have.property(
      'message',
      `You can't update trip::${tripId}`,
    );
  });

  it('should not cancel  travel request that was canceled', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/cancel-travel-request/${tripId}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(409);
    expect(res.body).to.have.property(
      'message',
      `You can't cancel trip::${tripId}`,
    );
  });

  it('should not cancel  travel request that is not available', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/cancel-travel-request/${-5}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(501);
    expect(res.body).to.have.property(
      'message',
      `Trip::${-5} not found`,
    );
  });

  it('should reject travel request', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/reject-travel-request/${tripId}`)
      .set('authorization', await signIn(user3))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property(
      'message',
      'You have successfully rejected the trip',
    );
  });
  it('should approve travel request', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/approve-travel-request/${tripId}`)
      .set('authorization', await signIn(user3))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(201);
    expect(res.body).to.have.property(
      'message',
      'You have successfully approved the trip',
    );
  });
  it('should not approve travel request if you are not manager', async () => {
    const res = await chai
      .request(app)
      .patch(`/api/v1/trips/approve-travel-request/${tripId}`)
      .set('authorization', await signIn(user1))
      .set('permission_name', permission);

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property(
      'message',
      'Trip was not reported to you.',
    );
  });
});
