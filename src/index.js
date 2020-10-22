module.exports = function reverse (n) {
  let number = n.toString();
  let reverseNumber = "";
  for(let i=number.length-1; i>=0; i--){
      reverseNumber += number[i];
  }
  return parseInt(reverseNumber);
}
