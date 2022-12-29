// time complexity is Big-O = O(n)
function factorial(n) {
    if (n<=0) return;

    let result = 1

    for (let i = 2; i <= n; i++) {
      result = result * i
    }
    return result
  }
  
  
  console.log(factorial(1)) // 1
  console.log(factorial(3)) // =3*2 =6
  console.log(factorial(8)) //= 8*7*6*5*4*3*2 =40320
  