function isSmaller(a, b) {
  return !isBigger(a, b);
}

console.log('isSmaller:', isSmaller(5, 3) === false);
console.log('isSmaller:', isSmaller(5, -1) === false);
console.log('isSmaller:', isSmaller(5, 11) === true);
