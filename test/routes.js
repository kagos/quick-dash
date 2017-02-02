process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server');

chai.use(chaiHttp);

describe('API Routes', () => {
  describe('GET /api/v1/users', () => {
    it('should return all users', (done) => {
      chai.request(server)
        .get('/api/v1/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(4);
          res.body[0].should.have.property('name');
          res.body[0].name.should.equal('Kalliope');
          done();
        });
    });
  });
});
