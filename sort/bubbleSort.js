// we have two loops of n worse case
// time complexity is Big-O = O(n^2)
function bubbleSort(arr) {
    let swapped
    do {
      swapped = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)
  }
  
  const arr = [10, 30, -4, 5, -12]
  bubbleSort(arr)
  console.log(arr) // [-12, -4, 5, 10, 30]
  