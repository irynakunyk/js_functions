function isBigger(a, b) {
  return a > b;
}

console.log('isBigger:', isBigger(5, 3) === true);
console.log('isBigger:', isBigger(5, -1) === true);
console.log('isBigger:', isBigger(5, 11) === false);
