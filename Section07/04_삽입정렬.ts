function solution7_4(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      if (arr[j - 1] < arr[j]) {
        break;
      }
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
      j--;
    }
  }
  return arr;
}

console.log(solution7_4([13, 11, 5, 7, 23, 15]));
console.log(solution7_4([20, 1, 5, 7, 13, 9]));
