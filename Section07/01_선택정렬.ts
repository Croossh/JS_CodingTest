function solution7_1(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    let min = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        idx = j;
      }
    }
		[arr[i], arr[idx]] = [min, arr[i]];
  }
  return arr;
}

console.log(solution7_1([13, 11, 5, 7, 23, 15]));
console.log(solution7_1([20, 1, 5, 7, 13, 9]));