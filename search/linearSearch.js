
// time complexity is Big-O = O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i
      }
    }
    return -1
  }
  
  console.log(linearSearch([8,4,-1,10], 4)) // 1
  console.log(linearSearch([6,9,5,4], 6)) // 0
  console.log(linearSearch([-1, 2, 8, 4, 5], 22)) // -1
  