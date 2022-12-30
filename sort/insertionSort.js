
// we have two loops of n worse case
// time complexity is Big-O = O(n^2)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j]
        j = j - 1
      }
      arr[j + 1] = numberToInsert
    }
  }
  
  const arr = [10, 30, -4, 5, -12]
  insertionSort(arr)
  console.log(arr) // [-12, -4, 5, 10, 30]
  