const randomPicker = require('../randomPicker');

describe('#generateResponse', () => {
  it('returns a helpful text message when given an empty text', () => {
    const text = '';
    const expectedWarningText = 'Please include a list of items from which to pick.';
    expect(randomPicker.generateResponse(text)).toEqual(expectedWarningText);
  });

  it('returns a helpful text message when given one option', () => {
    const text = '1'    
    const expectedResponseText = 'I can\'t randomly pick if you only give me one option.';
    expect(randomPicker.generateResponse(text)).toEqual(expectedResponseText);
  });
  
  it('returns one of two options', () => {
    const stubbedRandomItem = 'def';
    randomPicker.pickRandomItem = () => stubbedRandomItem;

    const text = 'abc def';
    const expectedResponseText = `Out of the following options:\n[abc,def]\n\nI picked ${stubbedRandomItem}.`;
    expect(randomPicker.generateResponse(text)).toEqual(expectedResponseText);
  });
});