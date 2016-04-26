function getMin() {
  var total = arguments.length;
  var min = arguments[0];
  for (var i = 0; i < total; i++) {
    var num = arguments[i];
    if (min > num) {
      min = num;
    }
  }

  return min;
}

console.log('getMin:', getMin(5, 3, -1) === -1);
console.log('getMin:', getMin(5, 1, 3, 11, 15, 8, -4, -55) === -55);
console.log('getMin:', getMin(5, 1, -11) === -11);
