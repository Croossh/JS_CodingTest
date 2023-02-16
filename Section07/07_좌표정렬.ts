function solution7_7(arr: Array<number[]>): Array<number[]> {
  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1][0] === arr[i][0]) {
      if (arr[i - 1][1] > arr[i][1]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  }
  return arr;
}
console.log(
  solution7_7([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
console.log(
  solution7_7([
    [4, 4],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 2],
    [3, 1],
    [3, 6],
    [5, 7],
  ])
);
