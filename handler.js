'use strict';

const qs = require('querystring');
const randomPicker = require('./src/randomPicker');

module.exports.respond = async (event, context) => {
  const parsedBody = qs.parse(event.body);

  return {
    statusCode: 200,
    body: randomPicker.generateResponse(parsedBody.text)
  };
};