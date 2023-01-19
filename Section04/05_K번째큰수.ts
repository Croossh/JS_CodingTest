function solution4_5(len: number, num: number, arr: number[]): number {
  const tripleSum: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        tripleSum.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  const result = [...new Set(tripleSum)];
  return result.sort((a, b) => b - a)[num - 1];
}

console.log(solution4_5(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
