/* eslint-disable*/
import mocha from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);
const requester = {
  email: 'neddyberry@gmail.com',
  password: 'admin1234',
};
const travelAdmin = {
  email: 'jamessidis2000@gmail.com',
  password: 'admin1234',
};
let requesterToken = '';
let travelAdminToken = '';
describe('Rate and Review Accomodation/', () => {
  it('login requester', (done) => {
    chai
      .request(app)
      .post('/api/v1/users/signin')
      .send(requester)
      .end((err, response) => {
        response.should.have.status(200);
        requesterToken = response.body.data.token;
        done();
      });
  });
  it('login travelAdmin', (done) => {
    chai
      .request(app)
      .post('/api/v1/users/signin')
      .send(travelAdmin)
      .end((err, response) => {
        response.should.have.status(200);
        travelAdminToken = response.body.data.token;
        done();
      });
  });
  it('Should add a rating', (done) => {
    chai
      .request(app)
      .post('/api/v1/rating/rate')
      .send({ accomodationId: 1, rating: 1 })
      .set({ Authorization: `Bearer ${requesterToken}` })
      .set({ permission_name: `rate_accomodations` })
      .end((err, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
  it('Should get all ratings provided', (done) => {
    chai
      .request(app)
      .get('/api/v1/rating/accomodationratings')
      .send({ accomodationId: 1, rating: 1 })
      .set({ Authorization: `Bearer ${requesterToken}` })
      .end((err, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
  it('Unauthorized user sould not see ratings', (done) => {
    chai
      .request(app)
      .get('/api/v1/rating/accomodationratings')
      .send({ accomodationId: 1, rating: 1 })
      .end((err, response) => {
        expect(response).to.have.status(400);
        done();
      });
  });
  it('Only a requester and a manager can add a rating', (done) => {
    chai
      .request(app)
      .post('/api/v1/rating/rate')
      .send({ accomodationId: 1, rating: 1 })
      .set({ Authorization: `Bearer ${travelAdminToken}` })
      .set({ permission_name: `rate_accomodations` })
      .end((err, response) => {
        expect(response).to.have.status(401);
        done();
      });
  });
  it('Should add a review', (done) => {
    chai
      .request(app)
      .post('/api/v1/review/review')
      .send({ accomodationId: 1, review: 'This is a super great hotel' })
      .set({ Authorization: `Bearer ${requesterToken}` })
      .set({ permission_name: `review_accomodations` })
      .end((err, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
  it('Should get all ratings provided', (done) => {
    chai
      .request(app)
      .get('/api/v1/review/allreviews')
      .set({ Authorization: `Bearer ${requesterToken}` })
      .end((err, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
  it('Unauthorized user sould not see reviews', (done) => {
    chai
      .request(app)
      .get('/api/v1/review/allreviews')
      .end((err, response) => {
        expect(response).to.have.status(400);
        done();
      });
  });
  it('Only a requester and a manager can add a rating', (done) => {
    chai
      .request(app)
      .post('/api/v1/review/review')
      .send({ accomodationId: 1, rating: 1 })
      .set({ Authorization: `Bearer ${travelAdminToken}` })
      .set({ permission_name: `review_accomodations` })
      .end((err, response) => {
        expect(response).to.have.status(400);
        done();
      });
  });
});
