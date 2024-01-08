// function shiftArray(arr, n) {
//   if (n > 0) {
//     const newArr = arr.slice(0, n + 1);
//     const newArr2 = arr.splice(arr.length - n);
//     return newArr2.concat(newArr);
//   }
//   const newArr = arr.slice(-n);
//   const newArr2 = arr.slice(0, -n);
//   return newArr.concat(newArr2);
// }

// // console.log(shiftArray(['a', 'b', 'c', 'd'], -1));
// console.log(shiftArray([10, 20, 30, 40, 50], -3));
// // shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
// // ['b', 'c', 'd', 'a'],
