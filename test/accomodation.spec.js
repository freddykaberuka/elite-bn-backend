/*eslint-disable*/
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';
import fs from 'fs';


chai.should();
chai.use(chaiHttp);
let id = '';
let travelAdminToken = null;
let location_id = '';
const permissionName = 'c_accomodation'
const updatePermissionName = 'u_accomodation'
let accomodation = '';
const deleteAccom = 'd_accomodation'

  describe.only('ACCOMODATIONS /', () => {
    it('can\'t create Accomodation without login', (done) => {
      chai.request(server)
        .post('/api/v1/accomodations/create')
        .end((err, response) => {
          response.should.have.status(401);
          done();
        });
    });
    it('Should login travel admin', (done)=>{
      chai.request(server)
          .post('/api/v1/users/signin')
          .send({
            email: 'traveladmin2021@gmail.com',
            password: 'traveladmin'
          })
          .end((error, response)=>{
              travelAdminToken = response.body.data.token;
              response.should.have.status(200);
              done();
          })
  });
    it('travel Admin should create accomodation', (done) => {
      chai.request(server)
        .post('/api/v1/accomodations/create')
        .set('authorization', travelAdminToken)
        .set('permission_name', permissionName)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Content-Type', 'multipart/form-data')
        .field('name', 'test Accomodation')
        .field('location_id', 1000)
        .field('description', 'test Accomodation desc')
        .field('facilities', ["wifi","sanning"])
        .field('capacity', 50)
        .field('roomsLeft', 10)
        .field('cost', 1000)
        .attach('image', fs.readFileSync('./test/mocks/file/tree.png'), 'tree.png')
        .end((err, response) => {
          console.log('<><><><><><>', response.body)
          response.should.have.status(201);
          id = response.body.data.id;
          location_id = response.body.data.location_id
          accomodation = response.body.data.id;
          done();
        });
    });
    it('travel Admin should not  create accomodation location that does not exists', (done) => {
      chai.request(server)
        .post('/api/v1/accomodations')
        .set('authorization', travelAdminToken)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .field('Content-Type', 'multipart/form-data')
        .field('name', 'test Accomodation')
        .field('description', 'test Accomodation desc')
        .field('location_id', 900)
        .field('facilities', '["wifi","sanning"]')
        .field('capacity', 50)
        .field('roomsLeft', 10)
        .end((err, response) => {
          response.should.have.status(404);

          done();
        });
    });
    it('travel Admin should not create accomodation with missing params', (done) => {
      chai.request(server)
        .post('/api/v1/accomodations/create')
        .set('authorization', travelAdminToken)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Content-Type', 'multipart/form-data')
        .field('name', 'test Accomodation')
        .field('facilities', '["wifi","sanning"]')
        .end((err, response) => {
          response.should.have.status(400);
          done();
        });
    });
    it('travel Admin should update accomodation', (done) => {
      chai.request(server)
        .patch(`/api/v1/accomodations/update/${id}`)
        .set('authorization', travelAdminToken)
        .set('permission_name', updatePermissionName)
        .field('name', 'test Accomodation')
        .field('location_id', 1000)
        .field('description', 'test Accomodation desc')
        .field('facilities', ["wifi","sanning"])
        .field('capacity', 50)
        .field('roomsLeft', 10)
        .field('cost', 1000)
        .attach('image', fs.readFileSync('./test/mocks/file/tree.png'), 'tree.png')
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
    it('users should get accomodation by location ', (done) => {
      chai.request(server)
        .get(`/api/v1/accomodations/read/${location_id}`)
        .set('authorization', travelAdminToken)
        .set('permission_name', permissionName)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
    it('Travel Admin should get all accomodations ', (done) => {
      chai.request(server)
        .get('/api/v1/accomodations/read')
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
    it('Travel Admin should delete an accomodation', (done) => {
      chai.request(server)
        .delete(`/api/v1/accomodations/delete/${accomodation}`)
        .set('authorization', travelAdminToken)
        .set('permission_name', deleteAccom)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });

