function solution7_8(arr: Array<number[]>): number {
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let count = 0;
  let et = 0;
  for (let i = 0; i < arr.length; i++) {
    if (et <= arr[i][0]) {
      et = arr[i][1];
      count++;
    }
  }
  return count;
}

console.log(
  solution7_8([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution7_8([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);

// return arr.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   else return a[0] - b[0];
// });
