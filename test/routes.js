var request = require('supertest'),
    express = require('express');

var app = require('../app.js');

describe('POST', function(){
  it('responds with a json success message', function(done){
    request(app)
    .post('/todo')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({'name': 'test'})
    .expect(200, done);
  });
});

describe('GET', function(){
  it('responds with a list of todo items in JSON', function(done){
    request(app)
    .get('/todo')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});