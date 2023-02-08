function solution7_3(arr: number[]): number[] {
  const arr1: number[] = [];
  const arr2: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? arr2.push(arr[i]) : arr1.push(arr[i]);
  }
  return [...arr1, ...arr2];
}

console.log(solution7_3([1, 2, 3, -3, -2, 5, 6, -6]));
