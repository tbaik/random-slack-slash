const request = require('supertest');
const app = require('../app.js');
const randomPicker = require('../randomPicker');

describe('slack/receive tests', () => {
  it('sending no options sends the user a helpful text message', (done) => {
    request(app)
      .post('/slack/receive')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('text=')
      .expect(200)
      .end((err, res) => {
        const expectedWarningText = 'Please include a list of items from which to pick.';
        expect(res.text).toEqual(expectedWarningText);
        done();
      });
  });

  it('sending one option sends back the same option with a helpful message', (done) => {
    request(app)
      .post('/slack/receive')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('text=1')
      .expect(200)
      .end((err, res) => {
        const expectedResponseText = 'I can\'t randomly pick if you only give me one option.';
        expect(res.text).toEqual(expectedResponseText);
        done();
      });
  });

  it('sending two options sends back one of the two options', (done) => {
    const stubbedRandomItem = 'def';
    randomPicker.pickRandomItem = () => stubbedRandomItem;

    request(app)
      .post('/slack/receive')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('text=abc%20def')
      .expect(200)
      .end((err, res) => {
        const expectedResponseText = `Out of the following options:\n[abc,def]\n\nI picked ${stubbedRandomItem}.`;
        expect(res.text).toEqual(expectedResponseText);
        done();
      });
  });
});