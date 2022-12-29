// time complexity is Big-O = O(n)
function fibonacci(n) {
  if(n<0) return;
    if (n===0) return 0;
    if (n===1) return 1;
    const fib = [0, 1]
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
    }
    //return fib; 
    return `fib(${n}) is  ${fib[n]}`
  }
  
  console.log(fibonacci(0)) // 0
  console.log(fibonacci(1)) // 1
  console.log(fibonacci(2)) // 1
  console.log(fibonacci(3)) // 2
  console.log(fibonacci(4)) // 3
  console.log(fibonacci(5)) // 5
  console.log(fibonacci(6)) // 8
  console.log(fibonacci(7)) // 13
  
  