const emptyTextPrompt = 'Please include a list of items from which to pick.';
const singleItemPrompt = 'I can\'t randomly pick if you only give me one option.';

const randomPicker = {};

randomPicker.generateResponse = (text) => {
  const itemsArr = text.split(' ');
  const itemsLength = (text === '') ? 0 : itemsArr.length;
  let responseText = '';
  
  if (itemsLength === 0) {
    responseText = emptyTextPrompt;
  } else if (itemsLength === 1) {
    responseText = singleItemPrompt;
  } else {
    responseText = generateRandomItemMessage(itemsArr);
  }
  
  return responseText;
};

const generateRandomItemMessage = (itemsArr) => {
  const randomItem = randomPicker.pickRandomItem(itemsArr);
  return `Out of the following options:\n[${itemsArr}]\n\nI picked ${randomItem}.`;
};

randomPicker.pickRandomItem = (arr) => {
  const length = arr.length; 
  const randIdx = Math.floor(Math.random() * length);
  return arr[randIdx];
}

module.exports = randomPicker;