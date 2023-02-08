function solution7_2(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(solution7_2([13, 11, 5, 7, 23, 15]));
console.log(solution7_2([20, 1, 5, 7, 13, 9]));

/*
5 2 3 1 4
2 5 3 1 4
1 5 3 2 4
...
*/
