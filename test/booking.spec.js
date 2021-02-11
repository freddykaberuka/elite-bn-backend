/* eslint-disable*/
import mocha from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.should();
chai.use(chaiHttp);

const existingUser = {
	"email": "isbernard2001@gmail.com",
	"password": "isbernard2001@gmail.com",
	"firstName": "Bernard",
	"lastName": "ISHIMWE"
}

const requester = {
  email: 'neddyberry@gmail.com',
  password: 'admin1234'
};
const admin = {
  email: 'admin@barefoot.com',
  password: 'admin1234'
};
const permission = 'get_roles';
let token;
let adminToken;
let requesterToken = '';
let id = '';

describe.only('Booking/', () => {
    it('It should login with email and password', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send(requester)
          .end((err, response) => {
            expect(response).to.have.status(200);
            token = response.body.data.token;
            done();
          });
      });
      it('It should login with email and password', (done) => {
        chai.request(app)
          .post('/api/v1/users/signin')
          .send(admin)
          .end((err, response) => {
            expect(response).to.have.status(200);
            adminToken = response.body.data.token;
            done();
          });
      });
    it('should book accomodation', (done)=>{
        chai.request(app)
            .post('/api/v1/booking/book')
            .set({ "Authorization": `Bearer ${token}` })
            .set({ "permission_name": `book_accomodation` })
            .send({
                checkinDate: "02-11-2021",
                checkoutDate: "02-15-2021",
                AccomodationId: 1,
                UserId: 2
            }).end((error, response)=>{
                expect(response.status).to.equal(200);
                done()
            })
    });
    it('Should not book an accomodation that is already booked', (done)=>{
        chai.request(app)
            .post('/api/v1/booking/book')
            .set({ "Authorization": `Bearer ${token}` })
            .set({ "permission_name": `book_accomodation` })
            .send({
                checkinDate: "02-11-2021",
                checkoutDate: "02-15-2021",
                AccomodationId: 1,
                UserId: 2
            }).end((error, response)=>{
                expect(response.status).to.equal(403);
                done()
            })
    });
    it('Should get All available Accomodations  ', (done)=>{
      chai.request(app)
          .get('/api/v1/booking/availableAccomodations')
          .set({ "Authorization": `Bearer ${token}` })
          .set({ "permission_name": `book_accomodation` })
          .end((error, response)=>{
              expect(response.status).to.equal(200);
              done()
          })
  });
  it('Should get All booked Accomodations ', (done)=>{
    chai.request(app)
        .get('/api/v1/booking/bookedAccomodations')
        .set({ "Authorization": `Bearer ${token}` })
        .set({ "permission_name": `book_accomodation` })
        .end((error, response)=>{
            expect(response.status).to.equal(200);
            done()
        })
});
it('Should not book an accomodation that does not exist', (done)=>{
  chai.request(app)
      .post('/api/v1/booking/book')
      .set({ "Authorization": `Bearer ${token}` })
      .set({ "permission_name": `book_accomodation` })
      .send({
          checkinDate: "02-11-2021",
          checkoutDate: "02-15-2021",
          AccomodationId: 1100,
          UserId: 2
      }).end((error, response)=>{
          expect(response.status).to.equal(404);
          done()
      })
});
  
});
