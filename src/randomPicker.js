function pickRandomItem(arr) {
  const length = arr.length; 
  const randIdx = Math.floor(Math.random() * length);
  return arr[randIdx];
}

module.exports = {
  pickRandomItem  
}