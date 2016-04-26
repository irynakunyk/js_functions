function getClosesToZero() {
  var total = arguments.length;
  var min = arguments[0];
  var closes;

  for (var i = 0; i < total; i++) {
    var val = Math.abs(arguments[i]);

    if (min > val) {
      min = val;
      closes = arguments[i];
    }
  }

  return closes;
}


console.log('getClosesToZero:', getClosesToZero(9, 5, -4, -9) === -4);
console.log('getClosesToZero:', getClosesToZero(9, 5, 1, -9) === 1);
console.log('getClosesToZero:', getClosesToZero(9, 5, 3, 2) === 2);
