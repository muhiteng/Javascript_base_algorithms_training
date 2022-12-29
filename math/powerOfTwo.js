// time complexity is Big-O = O(logn)
function isPowerOfTwo(n) {
while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

// time complexity is Big-O = O(1)
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwoBitWise(2)) // true
console.log(isPowerOfTwo(5)) // false