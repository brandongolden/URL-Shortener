var server = require('../src/server.js');
request = require('supertest');

describe('API', function() {

	beforeEach(function () {
		server = require('../src/server.js');
	});

	afterEach(function () {
		server.close();
	});

	it('/ should return specified object.', function testHealth(done) {
		request(server)
		  .get('/api/v1')
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, {hello: "world"}, done);
	});

	it('/status should return specified healthy:true', function testHealth(done) {
		request(server)
		  .get('/api/v1/status')
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, {healthy: true}, done);
	});


	it('/user/id should return a user obj with id.', function testHealth(done) {
		var fakeUserID = 374;
		request(server)
		  .get('/api/v1/user/' + fakeUserID)
		  .set('Accept', 'application/json')
		  .expect('Content-Type', /json/)
		  .expect(200, { user: {id: fakeUserID}}, done);
	});

});