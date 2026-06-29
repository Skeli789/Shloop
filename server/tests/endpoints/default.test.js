/**
 * Test file for default.js
 * Tests the default API endpoints to ensure they are working correctly
 */

const { expect } = require('chai');
const request = require('supertest');
const { StatusCode } = require('status-code-enum');

const { app, http } = require('../../server');


describe('Default API Endpoints', () =>
{
    after((done) =>
    {
        if (http.listening)
            http.close(done);
        else
            done();
    });

    describe('GET /api/default/data', () =>
    {
        it('should return success message', async () =>
        {
            // Make request to the endpoint
            const res = await request(app).get('/api/default/data');

            // Validate response
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message');
            expect(res.body.message).to.equal('API is working!');
            expect(res.status).to.equal(StatusCode.SuccessOK);
        });
    });
});
