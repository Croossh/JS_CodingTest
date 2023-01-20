function solution5_2(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item)).sort();
}

console.log(solution5_2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
