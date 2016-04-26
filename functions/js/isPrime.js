function isPrime(num) {
  for (var i = 2; i <  num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

console.log('isPrime:', isPrime(1) === false);
console.log('isPrime:', isPrime(3) === true);
console.log('isPrime:', isPrime(5) === true);
console.log('isPrime:', isPrime(6) === false);
console.log('isPrime:', isPrime(7) === true);
console.log('isPrime:', isPrime(8) === false);
console.log('isPrime:', isPrime(9) === false);
