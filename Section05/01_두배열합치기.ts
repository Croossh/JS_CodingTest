function solution5_1(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2].sort();
}

console.log(solution5_1([1, 3, 5], [2, 3, 6, 7, 9]));
