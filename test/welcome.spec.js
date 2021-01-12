import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

chai.should();

chai.use(chaiHttp);
// eslint-disable-next-line no-undef
describe('TEST Barefoot APIs', () => {
// welcome Endpoint
  // eslint-disable-next-line no-undef
  it('should GET Welcome Text', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        done();
      });
  });
  // Bad Url
  // eslint-disable-next-line no-undef
  it('should GET Bad requests', (done) => {
    chai.request(app)
      .get('/*')
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        done();
      });
  });
});
