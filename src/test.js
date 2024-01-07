// function createNDimensionalArray(n, size) {
//   if (n === 1) {
//     return Array.from({ length: size }).fill(0);
//   }
//   return Array.from({ length: size }, () =>
//     createNDimensionalArray(n - 1, size)
//   );
// }

// console.log(createNDimensionalArray(2, 3));
// // [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
