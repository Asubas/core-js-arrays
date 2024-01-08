// function findLongestIncreasingSubsequence(nums) {
//   let maxLength = 1;
//   let currentLength = 1;
//   return nums.reduce((acc, current, index) => {
//     if (current < nums[index + 1]) {
//       currentLength += 1;
//       maxLength = Math.max(maxLength, currentLength);
//     } else {
//       currentLength = 1;
//     }
//     return maxLength;
//   }, 0);
// }

// console.log(
//   findLongestIncreasingSubsequence([41, 60, 80, 10, 22, 9, 33, 21, 50])
// );
