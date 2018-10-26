const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const randomPicker = require('./randomPicker');
const emptyTextPrompt = 'Please include a list of items from which to pick.';
const singleItemPrompt = 'I can\'t randomly pick if you only give me one option.';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/slack/receive', function (req, res) {
  const itemsArr = req.body.text.split(' ');
  const itemsLength = (req.body.text === '') ? 0 : itemsArr.length;
  let responseText = '';
  if (itemsLength === 0) {
    responseText = emptyTextPrompt;
  } else if (itemsLength === 1) {
    responseText = singleItemPrompt;
  } else {
    responseText = generateRandomItemMessage(itemsArr);
  }

  res.send(responseText); 
});

function generateRandomItemMessage(itemsArr) {
  const randomItem = randomPicker.pickRandomItem(itemsArr);
  return `Out of the following options:\n[${itemsArr}]\n\nI picked ${randomItem}.`;
}

module.exports = app;